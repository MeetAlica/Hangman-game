import Solution from "./Solution.jsx";
import Lives from "./Lives.jsx";
import UsedLetters from "./UsedLetters.jsx";
import Weather from "./Weather.jsx";
import Image from "/monitor.png";

const Monitor = ({
  randomWord,
  startNewGame,
  displayWord,
  guesses,
  maxGuesses,
  guessedLetters,
}) => {
  return (
    <div className="relative w-full sm:w-2/3 xl:w-1/3 font-mono text-sm sm:text-base md:text-lg">
      <img src={Image} className="w-full" />
      <div className="flex flex-col-reverse xl:flex-row justify-between w-48 sm:w-1/2 absolute top-1/4 left-1/4">
        <Solution
          randomWord={randomWord}
          startNewGame={startNewGame}
          displayWord={displayWord}
          guesses={guesses}
          maxGuesses={maxGuesses}
        />
        <Lives guesses={guesses} maxGuesses={maxGuesses} />
      </div>
      <div className="absolute top-2/4 left-1/4">
        <UsedLetters guessedLetters={guessedLetters} />
      </div>
      <div className="absolute bottom-0 left-0 size-auto">
        <Weather />
      </div>
    </div>
  );
};

export default Monitor;
