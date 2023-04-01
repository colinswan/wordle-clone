import React from "react";

import { range } from "../../utils";

import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const GameResult = checkGuess(value, answer) || [];

  console.log(GameResult);

  return (
    <p className="guess">
      {GameResult.map((result, index) => {
        let className = "cell";

        if (result.status === "correct") {
          className = "cell correct";
        } else if (result.status === "incorrect") {
          className = "cell incorrect";
        } else if (result.status === "misplaced") {
          className = "cell misplaced";
        }

        return (
          <span key={index} className={className}>
            {value ? value[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
