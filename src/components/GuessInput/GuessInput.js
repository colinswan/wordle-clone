import React, { useState } from "react";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

function GuessInput({ guess, setGuess }) {
  const [PrevGuesses, setPrevGuesses] = useState([]);
  const handleGuess = (event) => {
    event.preventDefault();
    console.log(guess);
    setPrevGuesses([...PrevGuesses, guess]);
    setGuess("");
  };

  return (
    <>
      <PreviousGuesses PrevGuesses={PrevGuesses} />

      <form onSubmit={handleGuess} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern=".{5}"
          onChange={(event) => {
            const guessUppercase = event.target.value.toUpperCase();
            setGuess(guessUppercase);
          }}
        />
        <button type="submit">Submit Guess</button>
      </form>
    </>
  );
}

export default GuessInput;
