import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  console.log(answer);

  console.log(guesses.length);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  let disabled = false;

  // Initialize bannerResult to null
  let bannerResult = null;
  let correctGuess = false;
  let numOfGuesses = 0;

  // Check if there's a correct guess in the 'guesses' array using a for loop
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === answer) {
      correctGuess = true;
      numOfGuesses = i + 1;
      break;
    }
  }

  // Check if there are at least 6 guesses or if there's a correct guess
  if (guesses.length >= 6 || correctGuess) {
    // If there's a correct guess, set bannerResult to "win"
    if (correctGuess) {
      bannerResult = "win";
    }
    // If all 6 guesses are incorrect, set bannerResult to "lose"
    else {
      bannerResult = "lose";
    }
  }

  if (bannerResult) {
    disabled = true;
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={disabled} />
      <br />
      <Banner
        result={bannerResult}
        numOfGuesses={numOfGuesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
