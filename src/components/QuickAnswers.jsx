const QUICK_OPTIONS = [
  "o'clock",
  "half past",
  "quarter past",
  "quarter to",
  "I don't know 😅",
  "Hint please!",
];

export default function QuickAnswers({ onSelect, disabled }) {
  return (
    <div className="quick-answers">
      {QUICK_OPTIONS.map((option) => (
        <button
          key={option}
          className="quick-btn"
          onClick={() => onSelect(option)}
          disabled={disabled}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
