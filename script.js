const startButton = document.getElementById("start-button");
startButton.addEventListener("click", randomWord);

let lives = 5;
let words = [
  "elephant",
  "jazz",
  "umbrella",
  "quasar",
  "lighthouse",
  "whisper",
  "penguin",
  "nectarine",
  "giraffe",
  "mystify",
  "kaleidoscope",
  "serendipity",
  "velocity",
  "wanderlust",
  "harmony",
  "xenon",
  "zylophone",
  "quixotic",
  "vortex",
  "flamingo",
];

// Véletlenszerű szó kiválasztása az adatbázisból, előző betű divek kitörlése, a betűknek divek létrehozása
function randomWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  removeLetterBox();
  createGame(word);
}

// Divek létrehozása a betűknek
const solutionContainer = document.getElementById("solution-container");

let theWord = [];

function createGame(str) {
  let letterContainer = document.getElementById("letter-container");
  let letterDiv = document.createElement("div");
  letterDiv.id = "letterDiv";
  letterDiv.classList.add("letterDiv");
  letterContainer.append(letterDiv);
  let letterBox = document.createElement("div");
  letterBox.id = "letter-box";
  let i = 1;
  while (i <= str.length) {
    const letterDiv = document.createElement("div");
    letterDiv.id = `letter-${i}`;
    letterDiv.classList.add("unsolved");
    letterDiv.textContent = str.at(i - 1);
    theWord.push(str.at(i - 1));
    letterBox.append(letterDiv);
    i++;
  }
  solutionContainer.append(letterBox);
}

// Előző játék kitörlése
function removeLetterBox() {
  let letterBox = document.getElementById("letter-box");
  if (letterBox !== null) {
    letterBox.remove();
  }

  const letterDiv = document.getElementById("letterDiv");

  if (letterDiv !== null) {
    letterDiv.remove();
  }

  lives = 5;

  let mainContainer = document.getElementById("main-container");
  mainContainer.classList.remove(
    "lives-4",
    "lives-3",
    "lives-2",
    "lives-1",
    "lives-0"
  );

  let life5 = document.getElementById("lives-5");
  let life4 = document.getElementById("lives-4");
  let life3 = document.getElementById("lives-3");
  let life2 = document.getElementById("lives-2");
  let life1 = document.getElementById("lives-1");

  life5.style.display = "inline";
  life4.style.display = "inline";
  life3.style.display = "inline";
  life2.style.display = "inline";
  life1.style.display = "inline";

  theWord = [];
}

// Betű beírása
let form = document.getElementById("formId");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userLetter = document.getElementById("form-text").value;

  // Összehasonlítás a megoldással
  let letter;
  let number = 0;
  for (let i = 0; i < theWord.length; i++) {
    if (userLetter == theWord[i]) {
      const letterDiv = document.getElementById(`letter-${i + 1}`);
      // letterDiv.classList.remove("unsolved");
      letterDiv.classList.add("solved");
    } else {
      letter = `${userLetter}, `;
      number++;
    }
  }

  const letterDiv = document.getElementById("letterDiv");
  letterDiv.append(letter);

  // Élet csökkenése
  if (theWord.length == number) {
    lives--;
    let background = document.getElementById("main-container");
    let life5 = document.getElementById("lives-5");
    let life4 = document.getElementById("lives-4");
    let life3 = document.getElementById("lives-3");
    let life2 = document.getElementById("lives-2");
    let life1 = document.getElementById("lives-1");

    if (lives == 4) {
      background.classList.add("lives-4");
      life5.style.display = "none";
    }
    if (lives == 3) {
      background.classList.add("lives-3");
      life4.style.display = "none";
    }
    if (lives == 2) {
      background.classList.add("lives-2");
      life3.style.display = "none";
    }
    if (lives == 1) {
      background.classList.add("lives-1");
      life2.style.display = "none";
    }
    if (lives == 0) {
      background.classList.add("lives-0");
      life1.style.display = "none";
      alert("GAME OVER!");
    }
  }
});
