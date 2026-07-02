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

  // Read ONLY the word — never the meaning. Used by the speaker next to the
  // word so it stays useful for spelling practice (hear the word to spell it).
  const speakWord = useCallback(() => {
    (lang === "zh" ? ttsZh : ttsEn).speak(word);
  }, [lang, word, ttsZh, ttsEn]);

  // Read the explanation only: up to two definitions and their example
  // sentences. English lists only (Chinese cards have no definition). The
  // first utterance cancels any in-flight speech; the rest queue after it.
  const speakExplanation = useCallback(() => {
    if (lang === "zh" || !safeEntry?.meanings) return;
    let first = true;
    for (const m of safeEntry.meanings.slice(0, 2)) {
      for (const d of m.definitions.slice(0, 2)) {
        if (d.definition) { ttsEn.speak(d.definition, null, { cancel: first }); first = false; }
        if (d.example) { ttsEn.speak(d.example, null, { cancel: false }); }
      }
    }
  }, [lang, safeEntry, ttsEn]);

  const hasExplanation = !isZh && safeEntry?.meanings && safeEntry.meanings.length > 0;

  return (
    <div className={`word-detail${compact ? " compact" : ""}`}>
      <div className="word-detail-head">
        <h2 className="word-detail-word">{word}</h2>
        <button
          className="spelling-word-speak word-detail-speak"
          onClick={speakWord}
          aria-label={isZh ? "听一听（只读词语）" : "Read the word"}
          title={isZh ? "听一听（只读词语）" : "Read the word"}
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

      {hasExplanation && (
        <div className="word-detail-section">
          <div className="word-detail-meaning-head">
            <p className="word-detail-section-label">Meaning</p>
            <button
              className="spelling-word-speak word-detail-speak"
              onClick={speakExplanation}
              aria-label="Read the meaning"
              title="Read the meaning"
            >
              🔊
            </button>
          </div>
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
