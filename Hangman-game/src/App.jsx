import { useState } from "react";
import Title from "./components/Title.jsx";
import Monitor from "./components/Monitor.jsx";
import Keyboard from "./components/Keyboard.jsx";

const App = () => {
  const [randomWord, setRandomWord] = useState();
  const [displayWord, setDisplayWord] = useState("");
  const [guesses, setGuesses] = useState(0);
  const [maxGuesses] = useState(6);
  const [guessedLetters, setGuessedLetters] = useState("");

  const words = [
    "apple",
    "banana",
    "car",
    "dog",
    "elephant",
    "fish",
    "guitar",
    "house",
    "ice cream",
    "jacket",
    "kite",
    "lion",
    "moon",
    "notebook",
    "orange",
    "piano",
    "queen",
    "rabbit",
    "sun",
    "tree",
    "umbrella",
    "violin",
    "watermelon",
    "xylophone",
    "yacht",
    "zebra",
    "airplane",
    "butterfly",
    "coffee",
    "dragon",
    "eagle",
    "fire",
    "garden",
    "hamburger",
    "island",
    "juice",
    "kiwi",
    "lemon",
    "mountain",
    "ninja",
    "ocean",
    "pizza",
    "quilt",
    "rainbow",
    "squirrel",
    "turtle",
    "unicorn",
    "volcano",
    "whale",
    "xylophone",
    "yogurt",
    "zeppelin",
    "astronaut",
    "broccoli",
    "chocolate",
    "dolphin",
    "elephant",
    "fairy",
    "giraffe",
    "honey",
    "igloo",
    "jungle",
    "koala",
    "lighthouse",
    "mango",
    "narwhal",
    "octopus",
    "popcorn",
    "rocket",
    "sailboat",
    "tiger",
    "ufo",
    "vampire",
    "wizard",
    "xray",
    "yak",
    "zookeeper",
  ];

  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const startNewGame = () => {
    const newRandomWord = selectRandomWord();
    setRandomWord(newRandomWord);
    setDisplayWord(newRandomWord.replace(/./g, "*"));
    setGuesses(0);
    setGuessedLetters("");
  };

  const handleGuess = (char) => {
    const newDisplayWord = displayWord.split("");
    let found = false;

    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === char) {
        newDisplayWord[i] = char;
        found = true;
      }
    }

    if (!found) {
      setGuesses(guesses + 1);
      setGuessedLetters((prev) => prev + " " + char);
    }

    setDisplayWord(newDisplayWord.join(""));
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-zinc-900 via-green-500 to-zinc-900">
      <Title />
      <Monitor
        randomWord={randomWord}
        startNewGame={startNewGame}
        displayWord={displayWord}
        guesses={guesses}
        maxGuesses={maxGuesses}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        handleGuess={handleGuess}
        displayWord={displayWord}
        guesses={guesses} guessedLetters={guessedLetters}
      />
    </div>
  );
};

export default App;
