import { useState } from "react";

export default function ChoiceButtons({ choices, correctAnswer, onSelect, disabled, choiceIcons, earlyYears = false }) {
  const [selected, setSelected] = useState(null);

  const handleTap = (choice) => {
    if (disabled || selected !== null) return;
    setSelected(choice);
    // Brief delay so kid sees the color feedback before next question
    setTimeout(() => {
      onSelect(choice);
      setSelected(null);
    }, 600);
  };

  const labels = ["a", "b", "c", "d", "e"];

  return (
    <div className={`choice-buttons${earlyYears ? " choice-buttons-early" : ""}`}>
      {choices.map((choice, i) => {
        let className = "choice-btn";
        if (earlyYears) className += " choice-btn-early";
        if (selected !== null) {
          if (choice === correctAnswer) className += " choice-correct";
          else if (choice === selected) className += " choice-wrong";
        }
        const icon = choiceIcons?.[choice];
        return (
          <button
            key={choice}
            className={className}
            onClick={() => handleTap(choice)}
            disabled={disabled || selected !== null}
          >
            {icon && <span className="choice-icon">{icon}</span>}
            {earlyYears ? (
              // No a/b/c lettering for pre-readers; show the word small under
              // the picture (or large on its own when there's no picture).
              <span className={icon ? "choice-word" : "choice-word choice-word-solo"}>{choice}</span>
            ) : (
              <>
                <span className="choice-label">{labels[i]}</span> {choice}
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
