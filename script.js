const startButton = document.getElementById("start-button");
startButton.addEventListener("click", randomWord);

// Véletlenszerű szó kiválasztása az adatbázisból, előző betű divek kitörlése, a betűknek divek létrehozása
function randomWord() {
  fetch("http://localhost:3000/words/")
    .then(response => response.json())
    .then(word => {
      word = word[Math.floor(Math.random() * word.length)];
    removeLetterBox()
    createGame(word);
    });
}

// Divek létrehozása a betűknek
const solutionContainer = document.getElementById("solution-container");

function createGame(str) {
  let letterBox = document.createElement("div");
  letterBox.id = "letter-box";
  let i = 1;
  while (i <= str.length) {
    const letterDiv = document.createElement("div");
    letterDiv.id = `letter-${i}`;
    letterDiv.textContent = str.at(i-1);
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
}

// Betű beírása
let form = document.getElementById("formId");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});