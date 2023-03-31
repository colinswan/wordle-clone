import React from "react";

function PreviousGuesses({ PrevGuesses }) {
  return (
    <div className="guess-results">
      {PrevGuesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
