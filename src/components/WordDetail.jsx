import { useCallback, useEffect, useState } from "react";
import { lookupWord } from "../utils/dictionary";
import { useTTS } from "../hooks/useSpeech";

// Learn-mode word card. Shows the word and a speaker that reads ONLY the word
// (for spelling practice), plus the pinyin for Chinese words. No dictionary
// definitions — spelling lists are for practising spelling, not vocabulary.
export default function WordDetail({ word, lang, compact = false }) {
  const ttsZh = useTTS("zh");
  const ttsEn = useTTS("en");
  const [pinyinFor, setPinyinFor] = useState(null);

  const isZh = lang === "zh";

  // Chinese words show pinyin, derived locally via pinyin-pro. English words
  // show nothing extra — no definition fetch.
  useEffect(() => {
    if (!word || lang !== "zh") return;
    let cancelled = false;
    lookupWord(word, "zh").then((e) => {
      if (!cancelled) setPinyinFor({ word, pinyin: e?.pinyin || null });
    });
    return () => { cancelled = true; };
  }, [word, lang]);

  // Only show pinyin once it's resolved for the current word (guards a stale
  // value while a new word loads, and stays null for English).
  const pinyin = isZh && pinyinFor?.word === word ? pinyinFor.pinyin : null;

  const speakWord = useCallback(() => {
    (lang === "zh" ? ttsZh : ttsEn).speak(word);
  }, [lang, word, ttsZh, ttsEn]);

  return (
    <div className={`word-detail${compact ? " compact" : ""}`}>
      <div className="word-detail-head">
        <h2 className="word-detail-word">{word}</h2>
        <button
          className="spelling-word-speak word-detail-speak"
          onClick={speakWord}
          aria-label={isZh ? "听一听" : "Read the word"}
          title={isZh ? "听一听" : "Read the word"}
        >
          🔊
        </button>
      </div>

      {isZh && pinyin && (
        <p className="word-detail-pinyin">{pinyin}</p>
      )}
    </div>
  );
}
