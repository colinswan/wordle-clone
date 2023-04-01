import React from "react";

function Banner({ result, numOfGuesses, answer }) {
  return (
    <>
      {result === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numOfGuesses} guesses</strong>.
          </p>
        </div>
      ) : result === "lose" ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Banner;
