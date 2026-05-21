import { useCallback, useEffect, useState } from "react";
import { lookupWord } from "../utils/dictionary";
import { useTTS } from "../hooks/useSpeech";

// Shared content panel for both the per-word modal and the Learn-mode card.
// Caller controls layout/wrapping; this component renders the lookup payload
// with a 🔊 button that reads the entire card (word + pinyin/phonetic +
// meanings + examples) in the appropriate language(s).
export default function WordDetail({ word, lang, compact = false }) {
  // Both languages available so Chinese cards can read the word in Mandarin
  // and the English translation in English, in sequence.
  const ttsZh = useTTS("zh");
  const ttsEn = useTTS("en");
  // Track which word the current entry belongs to so we can derive a loading
  // state without setting state synchronously inside the effect body.
  const [loadedFor, setLoadedFor] = useState(null);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!word) return;
    let cancelled = false;
    lookupWord(word, lang).then((e) => {
      if (cancelled) return;
      setEntry(e);
      setLoadedFor(`${lang}:${word}`);
    });
    return () => { cancelled = true; };
  }, [word, lang]);

  const key = `${lang}:${word}`;
  const loading = loadedFor !== key;
  const safeEntry = loadedFor === key ? entry : null;

  const isZh = lang === "zh";
  const noDefinitionsCopy = isZh
    ? "暂时找不到这个词的释义。"
    : "No dictionary entry found for this word.";

  // Read the whole card aloud. First utterance cancels any in-flight speech;
  // subsequent ones queue with a short gap so the readout stays paced.
  const readAll = useCallback(() => {
    if (lang === "zh") {
      ttsZh.speak(word);
      if (safeEntry?.translation) {
        ttsEn.speak(safeEntry.translation, null, { cancel: false });
      }
      return;
    }
    ttsEn.speak(word);
    if (safeEntry?.meanings) {
      for (const m of safeEntry.meanings.slice(0, 2)) {
        for (const d of m.definitions.slice(0, 2)) {
          if (d.definition) ttsEn.speak(d.definition, null, { cancel: false });
          if (d.example) ttsEn.speak(d.example, null, { cancel: false });
        }
      }
    }
  }, [lang, word, safeEntry, ttsZh, ttsEn]);

  return (
    <div className={`word-detail${compact ? " compact" : ""}`}>
      <div className="word-detail-head">
        <h2 className="word-detail-word">{word}</h2>
        <button
          className="spelling-word-speak word-detail-speak"
          onClick={readAll}
          aria-label={isZh ? "听全部" : "Read aloud"}
          title={isZh ? "读全部" : "Read aloud"}
        >
          🔊
        </button>
      </div>

      {safeEntry?.pinyin && (
        <p className="word-detail-pinyin">{safeEntry.pinyin}</p>
      )}
      {safeEntry?.phonetic && (
        <p className="word-detail-pinyin">{safeEntry.phonetic}</p>
      )}

      {loading && (
        <p className="word-detail-loading">
          {isZh ? "查找中…" : "Looking up…"}
        </p>
      )}

      {!loading && isZh && safeEntry?.translation && (
        <div className="word-detail-section">
          <p className="word-detail-section-label">English meaning</p>
          <p className="word-detail-text">{safeEntry.translation}</p>
        </div>
      )}

      {!loading && !isZh && safeEntry?.meanings && safeEntry.meanings.length > 0 && (
        <div className="word-detail-section">
          {safeEntry.meanings.slice(0, 3).map((m, i) => (
            <div key={i} className="word-detail-meaning">
              {m.partOfSpeech && (
                <p className="word-detail-section-label">{m.partOfSpeech}</p>
              )}
              {m.definitions.map((d, j) => (
                <div key={j} className="word-detail-defn">
                  <p className="word-detail-text">{d.definition}</p>
                  {d.example && (
                    <p className="word-detail-example">“{d.example}”</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {!loading && isZh && !safeEntry?.translation && (
        <p className="word-detail-empty">{noDefinitionsCopy}</p>
      )}
      {!loading && !isZh && (!safeEntry?.meanings || safeEntry.meanings.length === 0) && (
        <p className="word-detail-empty">{noDefinitionsCopy}</p>
      )}
    </div>
  );
}
