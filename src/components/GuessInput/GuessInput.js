import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleGuess = () => {
    console.log(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleGuess} class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
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
    </form>
  );
}

export default GuessInput;
