const Input = ({ handleGuess, displayWord, guesses, guessedLetters }) => {
  const handleClick = (key) => {
    handleGuess(key);
  };

  let gameOver = false;

  if (guesses >= 6 || !displayWord.includes("*")) {
    gameOver = true;
  }

  return (
    <div className="rounded-md border-2 border-gray-700 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
      <div className="flex flex-row justify-center items-center">
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("q")}
          disabled={
            displayWord.includes("q") ||
            guessedLetters.includes("q") ||
            gameOver
          }
        >
          Q
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("w")}
          disabled={
            displayWord.includes("w") ||
            guessedLetters.includes("w") ||
            gameOver
          }
        >
          W
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("e")}
          disabled={
            displayWord.includes("e") ||
            guessedLetters.includes("e") ||
            gameOver
          }
        >
          E
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("r")}
          disabled={
            displayWord.includes("r") ||
            guessedLetters.includes("r") ||
            gameOver
          }
        >
          R
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("t")}
          disabled={
            displayWord.includes("t") ||
            guessedLetters.includes("t") ||
            gameOver
          }
        >
          T
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("y")}
          disabled={
            displayWord.includes("y") ||
            guessedLetters.includes("y") ||
            gameOver
          }
        >
          Y
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("u")}
          disabled={
            displayWord.includes("u") ||
            guessedLetters.includes("u") ||
            gameOver
          }
        >
          U
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("i")}
          disabled={
            displayWord.includes("i") ||
            guessedLetters.includes("i") ||
            gameOver
          }
        >
          I
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("o")}
          disabled={
            displayWord.includes("o") ||
            guessedLetters.includes("o") ||
            gameOver
          }
        >
          O
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("p")}
          disabled={
            displayWord.includes("p") ||
            guessedLetters.includes("p") ||
            gameOver
          }
        >
          P
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("a")}
          disabled={
            displayWord.includes("a") ||
            guessedLetters.includes("a") ||
            gameOver
          }
        >
          A
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("s")}
          disabled={
            displayWord.includes("s") ||
            guessedLetters.includes("s") ||
            gameOver
          }
        >
          S
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("d")}
          disabled={
            displayWord.includes("d") ||
            guessedLetters.includes("d") ||
            gameOver
          }
        >
          D
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("f")}
          disabled={
            displayWord.includes("f") ||
            guessedLetters.includes("f") ||
            gameOver
          }
        >
          F
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("g")}
          disabled={
            displayWord.includes("g") ||
            guessedLetters.includes("g") ||
            gameOver
          }
        >
          G
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("h")}
          disabled={
            displayWord.includes("h") ||
            guessedLetters.includes("h") ||
            gameOver
          }
        >
          H
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("j")}
          disabled={
            displayWord.includes("j") ||
            guessedLetters.includes("j") ||
            gameOver
          }
        >
          J
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("k")}
          disabled={
            displayWord.includes("k") ||
            guessedLetters.includes("k") ||
            gameOver
          }
        >
          K
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("l")}
          disabled={
            displayWord.includes("l") ||
            guessedLetters.includes("l") ||
            gameOver
          }
        >
          L
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("z")}
          disabled={
            displayWord.includes("z") ||
            guessedLetters.includes("z") ||
            gameOver
          }
        >
          Z
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("x")}
          disabled={
            displayWord.includes("x") ||
            guessedLetters.includes("x") ||
            gameOver
          }
        >
          X
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("c")}
          disabled={
            displayWord.includes("c") ||
            guessedLetters.includes("c") ||
            gameOver
          }
        >
          C
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("v")}
          disabled={
            displayWord.includes("v") ||
            guessedLetters.includes("v") ||
            gameOver
          }
        >
          V
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("b")}
          disabled={
            displayWord.includes("b") ||
            guessedLetters.includes("b") ||
            gameOver
          }
        >
          B
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("n")}
          disabled={
            displayWord.includes("n") ||
            guessedLetters.includes("n") ||
            gameOver
          }
        >
          N
        </button>
        <button
          className="rounded-md border border-gray-300 bg-white shadow-md p-2 m-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={() => handleClick("m")}
          disabled={
            displayWord.includes("m") ||
            guessedLetters.includes("m") ||
            gameOver
          }
        >
          M
        </button>
      </div>
    </div>
  );
};

export default Input;
