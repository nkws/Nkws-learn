import { useCallback, useEffect, useRef, useState } from "react";
import { parseOcrText } from "../utils/spellingStorage";

const STATE = {
  PREVIEW: "preview",
  PROCESSING: "processing",
  REVIEW: "review",
  ERROR: "error",
};

export default function CameraCaptureModal({ onClose, onAddWords }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const streamRef = useRef(null);
  const [phase, setPhase] = useState(STATE.PREVIEW);
  const [errorMsg, setErrorMsg] = useState("");
  const [progress, setProgress] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState(() => new Set());
  const [previewSrc, setPreviewSrc] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  // Start the live camera preview on mount; fall back to file picker on error.
  useEffect(() => {
    let cancelled = false;
    async function start() {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraReady(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play().catch(() => {});
        }
        setCameraReady(true);
      } catch {
        setCameraReady(false);
      }
    }
    start();
    return () => {
      cancelled = true;
      const s = streamRef.current;
      if (s) s.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, []);

  const stopCamera = useCallback(() => {
    const s = streamRef.current;
    if (s) {
      s.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  }, []);

  const runOcr = useCallback(async (imageSource) => {
    setPhase(STATE.PROCESSING);
    setProgress(0);
    try {
      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker("eng", 1, {
        logger: (m) => {
          if (m.status === "recognizing text") setProgress(Math.round(m.progress * 100));
        },
      });
      const { data } = await worker.recognize(imageSource);
      await worker.terminate();
      const words = parseOcrText(data?.text || "");
      if (words.length === 0) {
        setErrorMsg("No words found. Try a clearer photo with good lighting.");
        setPhase(STATE.ERROR);
        return;
      }
      setCandidates(words);
      setSelected(new Set(words));
      setPhase(STATE.REVIEW);
    } catch (err) {
      console.error("OCR failed", err);
      setErrorMsg("Couldn't scan the image. Please try again.");
      setPhase(STATE.ERROR);
    }
  }, []);

  const handleCapture = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const w = video.videoWidth;
    const h = video.videoHeight;
    if (!w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, w, h);
    setPreviewSrc(canvas.toDataURL("image/jpeg", 0.92));
    stopCamera();
    runOcr(canvas);
  }, [runOcr, stopCamera]);

  const handleFile = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setPreviewSrc(url);
      stopCamera();
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current || document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        runOcr(canvas);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    },
    [runOcr, stopCamera]
  );

  const toggleWord = useCallback((word) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  }, []);

  const editCandidate = useCallback((index, newValue) => {
    setCandidates((prev) => {
      const next = [...prev];
      next[index] = newValue;
      return next;
    });
    setSelected((prev) => {
      const next = new Set(prev);
      next.add(newValue);
      return next;
    });
  }, []);

  const handleAdd = useCallback(() => {
    const out = candidates
      .map((w) => w.trim())
      .filter((w) => w.length > 0 && selected.has(w));
    onAddWords(out);
    onClose();
  }, [candidates, selected, onAddWords, onClose]);

  return (
    <div className="reward-overlay" onClick={onClose}>
      <div className="reward-modal spelling-camera-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="reward-title">Scan word list</h2>

        {phase === STATE.PREVIEW && (
          <>
            <p className="reward-subtitle">
              Point at a printed spelling list and tap Capture. Lighting matters!
            </p>
            <div className="spelling-camera-stage">
              {cameraReady ? (
                <video ref={videoRef} playsInline muted className="spelling-camera-video" />
              ) : (
                <div className="spelling-camera-fallback">
                  Camera not available. Use the photo picker below.
                </div>
              )}
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </div>
            <div className="spelling-camera-actions">
              {cameraReady && (
                <button className="btn-primary" onClick={handleCapture}>
                  📸 Capture
                </button>
              )}
              <button
                className="btn-secondary"
                onClick={() => fileInputRef.current?.click()}
              >
                Choose photo
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </div>
            <button className="confirm-cancel" onClick={onClose}>
              Cancel
            </button>
          </>
        )}

        {phase === STATE.PROCESSING && (
          <>
            <p className="reward-subtitle">Reading the words… {progress}%</p>
            {previewSrc && (
              <img src={previewSrc} alt="Captured" className="spelling-camera-preview" />
            )}
            <div className="spelling-progress-bar">
              <div className="spelling-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </>
        )}

        {phase === STATE.REVIEW && (
          <>
            <p className="reward-subtitle">
              Check the words. Tap to toggle, or edit the text. Then add them to your list.
            </p>
            <div className="spelling-candidate-list">
              {candidates.map((word, i) => {
                const isOn = selected.has(word);
                return (
                  <div key={i} className={`spelling-candidate-row${isOn ? "" : " off"}`}>
                    <button
                      className="spelling-candidate-toggle"
                      onClick={() => toggleWord(word)}
                      aria-label={isOn ? "Exclude word" : "Include word"}
                    >
                      {isOn ? "✓" : "○"}
                    </button>
                    <input
                      type="text"
                      className="spelling-candidate-input"
                      value={word}
                      onChange={(e) => editCandidate(i, e.target.value)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="spelling-camera-actions">
              <button className="btn-primary" onClick={handleAdd}>
                Add {selected.size} word{selected.size === 1 ? "" : "s"}
              </button>
              <button className="btn-secondary" onClick={() => { setPhase(STATE.PREVIEW); setCameraReady(false); setCandidates([]); setSelected(new Set()); }}>
                Try again
              </button>
            </div>
            <button className="confirm-cancel" onClick={onClose}>
              Cancel
            </button>
          </>
        )}

        {phase === STATE.ERROR && (
          <>
            <p className="reward-subtitle">{errorMsg}</p>
            <div className="spelling-camera-actions">
              <button
                className="btn-primary"
                onClick={() => { setErrorMsg(""); setPhase(STATE.PREVIEW); }}
              >
                Try again
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
