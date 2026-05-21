import { useCallback, useEffect, useState } from "react";
import { lookupWord } from "../utils/dictionary";
import { useTTS } from "../hooks/useSpeech";

// Shared content panel for both the per-word modal and the Learn-mode card.
// For English lists it shows the dictionary entry (phonetic, meanings,
// examples) from api.dictionaryapi.dev. For Chinese lists it shows the
// pinyin only — no definition lookup, since no free source gave acceptable
// quality for primary-school 词语.
export default function WordDetail({ word, lang, compact = false }) {
  const ttsZh = useTTS("zh");
  const ttsEn = useTTS("en");
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

  // Read aloud. First utterance cancels in-flight speech; subsequent queue.
  // Chinese cards just read the word — no definition to chain. English cards
  // read the word then up to two definitions and their example sentences.
  const readAll = useCallback(() => {
    if (lang === "zh") {
      ttsZh.speak(word);
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
          aria-label={isZh ? "听一听" : "Read aloud"}
          title={isZh ? "听一听" : "Read aloud"}
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

      {loading && !isZh && (
        <p className="word-detail-loading">Looking up…</p>
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

      {!loading && !isZh && (!safeEntry?.meanings || safeEntry.meanings.length === 0) && (
        <p className="word-detail-empty">No dictionary entry found for this word.</p>
      )}
    </div>
  );
}
