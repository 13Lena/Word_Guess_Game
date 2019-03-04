//inisilize game 

//pick random word from list
var wordList = [
  "black", "eyeliner",
  "leather", "vampire",
  "victorian", "pastel",
  "corporate", "platforms",
  "corset", "parasol",
  "silver", "fishnet",
  "skull", "bat",
  "lipstick", "nocturnal"
];

var answerWord = [];
var winCounter = 0;

var hiddenWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(hiddenWord)

//word to guess
for (var i = 0; i < hiddenWord.length; i++) {
  answerWord[i] = ("_");
}

// wrong array
var wrongGuessedLetters = new Array(10);
for (var j = 0; j <= 9; j++) {
  wrongGuessedLetters[j] = ("_");
}

//how empty spaces =========================
function documentPushes() {
  document.getElementById("answerWord").innerText = answerWord.join(' ');
  debugger
  document.getElementById("wrongGuessedLetters").innerText = wrongGuessedLetters
    .join(' ');

  // win counter
  document.getElementById("winCounter").innerText = winCounter;

}
function newWord () {
  answerWord = [];
  hiddenWord = wordList[Math.floor(Math.random() * wordList.length)];

  //word to guess
for (var i = 0; i < hiddenWord.length; i++) {
  answerWord[i] = ("_");
}

// wrong array
wrongGuessedLetters = new Array(10);
for (var j = 0; j <= 9; j++) {
  wrongGuessedLetters[j] = ("_");
}

}
documentPushes();

// when letter is guessed
//    keep track (print out for player) & make sure its legal
//     compare to each letter on word,  if matching 
//     put in wrong letter array otherwise
// function wrongLettersFull( ) 
//   escape = lose;
//   return true
// loop through everytime, like question game
//     set number of loops (10), display
//    end when wrong guess array full

//main game ===================================================

document.onkeyup = function (event) {
  var guessedLetter = event.key;
  console.log(guessedLetter);
  debugger

  var found = false;
  for (var j = 0; j < answerWord.length; j++) {
    if (hiddenWord[j] === guessedLetter) {
      answerWord[j] = guessedLetter;
      found = true;
    }
  }
  debugger;
  // function wrongGuess() 
  if (!found) {
    var shownWrongLetters = wrongGuessedLetters.indexOf("_");
    wrongGuessedLetters[shownWrongLetters] = guessedLetter;
      
  }
  if (wrongGuessedLetters[9] != "_") {
    newWord();
  }
  
  if (answerWord.join('') === hiddenWord) {
    winCounter++;
    newWord();
  }

  documentPushes();

  //location.reload();
  // Is key in the hiddenWord
  // var isKeyInHiddenWord = hiddenWord.indexOf(guessedLetter) !== -1

  // console.log(isKeyInHiddenWord, hiddenWord);

  }

