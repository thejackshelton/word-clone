import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  let status;
  let isGameOver;

  if (guesses.includes(answer)) {
    status = 'won';
    isGameOver = true;
  } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    status = 'lost';
    isGameOver = true;
  } else {
    status = 'running';
    isGameOver = false;
  }
  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <Banner status={status} guesses={guesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
