import { useState } from "react";

export default function ChoiceButtons({ choices, correctAnswer, onSelect, disabled }) {
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

  return (
    <div className="choice-buttons">
      {choices.map((choice) => {
        let className = "choice-btn";
        if (selected !== null) {
          if (choice === correctAnswer) className += " choice-correct";
          else if (choice === selected) className += " choice-wrong";
        }
        return (
          <button
            key={choice}
            className={className}
            onClick={() => handleTap(choice)}
            disabled={disabled || selected !== null}
          >
            {choice}
          </button>
        );
      })}
    </div>
  );
}
