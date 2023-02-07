import React from 'react';

function GuessInput({ handleSubmitGuess, isGameOver }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 characters. 💖');
      return;
    }

    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess</label>
      <input
        disabled={isGameOver}
        minLength={5}
        maxLength={5}
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
