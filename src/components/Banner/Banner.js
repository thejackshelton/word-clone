import React from 'react';

function Banner({ status, guesses, answer }) {
  let theme;
  let victoryMessage = `${' '} ${guesses.length} guesses`;

  if (guesses.length === 1 && status === 'won') {
    victoryMessage = `${' '} ${guesses.length} guess`;
  }

  if (status === 'won') {
    theme = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{victoryMessage}</strong>.
        </p>
      </div>
    );
  } else if (status === 'lost') {
    theme = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return <>{theme}</>;
}

export default Banner;
