import { useEffect, useState } from "react";
import { lookupWord } from "../utils/dictionary";

// Shared content panel for both the per-word modal and the Learn-mode card.
// Caller controls layout/wrapping; this component just renders the lookup
// payload with a 🔊 button and a loading state.
export default function WordDetail({ word, lang, onSpeak, compact = false }) {
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

  return (
    <div className={`word-detail${compact ? " compact" : ""}`}>
      <div className="word-detail-head">
        <h2 className="word-detail-word">{word}</h2>
        {onSpeak && (
          <button
            className="spelling-word-speak word-detail-speak"
            onClick={() => onSpeak(word)}
            aria-label={isZh ? "听一听" : "Hear the word"}
          >
            🔊
          </button>
        )}
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
