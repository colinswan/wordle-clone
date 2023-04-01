import React from "react";

const qwertyLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ guesses, answer }) {
  const answerLetters = answer.split("");

  function getClassName(letter) {
    // letter passed in is every letter in the qwertyLetters array
    let className = "keyboard-key";
    let letterStatuses = [];

    guesses.forEach((guess) => {
      // all the letters from the guess input
      const guessLetters = guess.split("");

      guessLetters.forEach((guessLetter, index) => {
        if (guessLetter === letter) {
          // if n letter from the answer is the same as the n letter from the guess....
          if (answerLetters[index] === letter) {
            letterStatuses.push("correct");
          } else if (answerLetters.includes(letter)) {
            letterStatuses.push("misplaced");
          } else {
            letterStatuses.push("incorrect");
          }
        }
      });
    });

    // set the className based on the letterStatuses
    if (letterStatuses.includes("correct")) {
      className += " correct";
    } else if (letterStatuses.includes("misplaced")) {
      className += " misplaced";
    } else if (letterStatuses.includes("incorrect")) {
      className += " incorrect";
    } else {
      className += " unused";
    }

    return className;
  }

  return (
    <div className="keyboard">
      {qwertyLetters.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter, letterIndex) => (
            <button key={letterIndex} className={getClassName(letter)}>
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
