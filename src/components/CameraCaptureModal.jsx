import { useCallback, useRef, useState } from "react";
import { parseOcrText, preprocessForOcr } from "../utils/spellingStorage";

const STATE = {
  PROMPT: "prompt",
  PROCESSING: "processing",
  REVIEW: "review",
  ERROR: "error",
};

export default function CameraCaptureModal({ onClose, onAddWords }) {
  const fileInputRef = useRef(null);
  const [phase, setPhase] = useState(STATE.PROMPT);
  const [errorMsg, setErrorMsg] = useState("");
  const [progress, setProgress] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState(() => new Set());
  const [previewSrc, setPreviewSrc] = useState(null);

  const runOcr = useCallback(async (canvas) => {
    setPhase(STATE.PROCESSING);
    setProgress(0);
    try {
      const { createWorker, PSM } = await import("tesseract.js");
      const worker = await createWorker("eng", 1, {
        logger: (m) => {
          if (m.status === "recognizing text") setProgress(Math.round(m.progress * 100));
        },
      });
      // PSM 6: single uniform block of text — best for column-style word lists.
      // The char whitelist nudges Tesseract away from 0/O, 1/l/I confusions.
      await worker.setParameters({
        tessedit_pageseg_mode: PSM ? PSM.SINGLE_BLOCK : "6",
        tessedit_char_whitelist:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'- ",
      });
      const { data } = await worker.recognize(canvas);
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
      setErrorMsg("Couldn't read the image. Please try again.");
      setPhase(STATE.ERROR);
    }
  }, []);

  const handleFile = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      setPreviewSrc(url);
      const img = new Image();
      img.onload = () => {
        const canvas = preprocessForOcr(img);
        runOcr(canvas);
      };
      img.onerror = () => {
        setErrorMsg("Couldn't open the photo. Please try a different one.");
        setPhase(STATE.ERROR);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    },
    [runOcr]
  );

  const openPicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

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

  const resetToPrompt = useCallback(() => {
    setErrorMsg("");
    setCandidates([]);
    setSelected(new Set());
    setPreviewSrc(null);
    setPhase(STATE.PROMPT);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  return (
    <div className="reward-overlay" onClick={onClose}>
      <div className="reward-modal spelling-camera-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="reward-title">Scan word list</h2>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: "none" }}
          onChange={handleFile}
        />

        {phase === STATE.PROMPT && (
          <>
            <p className="reward-subtitle">
              Take a photo of the spelling list, or pick one from your photos.
              Clear, well-lit shots work best.
            </p>
            <div className="spelling-camera-actions">
              <button className="btn-primary" onClick={openPicker}>
                📷 Take or upload photo
              </button>
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
              <button className="btn-secondary" onClick={resetToPrompt}>
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
              <button className="btn-primary" onClick={resetToPrompt}>
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
