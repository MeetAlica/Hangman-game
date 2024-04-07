import { useState, useEffect } from "react";

const Solution = ({
  randomWord,
  startNewGame,
  displayWord,
  guesses,
  maxGuesses,
}) => {
  const [showUnderscore, setShowUnderscore] = useState(true);
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore((prevState) => !prevState);
    }, 500);
    const interval2 = setInterval(() => {
      setShowStart((prevState) => !prevState);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const statusText = () => {
    if (displayWord === randomWord) {
      return "You hacked it!";
    } else if (guesses >= maxGuesses) {
      return "Game over! The password was: " + randomWord;
    } else {
      return "";
    }
  };

  return (
    <div className="text-green-500">
      <p>Username: admin{showUnderscore && "_"}</p>
      <p>Password: {displayWord}</p>

      <p>{statusText()}</p>

      {showStart && (
        <button onClick={startNewGame}>
          {randomWord ? "Reset" : "Tap here to start!"}
        </button>
      )}
    </div>
  );
};

export default Solution;
