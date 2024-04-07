import Input from "./Input.jsx";

const Keyboard = ({ handleGuess, displayWord, guesses, guessedLetters }) => {
  return (
    <div className="w-full sm:w-2/3 xl:w-1/3">
      <Input
        handleGuess={handleGuess}
        displayWord={displayWord}
        guesses={guesses}
        guessedLetters={guessedLetters}
      />
    </div>
  );
};

export default Keyboard;
