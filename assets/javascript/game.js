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
    "lipstick", "nocturnal",
    "", "",
    "", "",
];

var hiddenWord = wordList[Math.floor(Math.random() * wordList.length)];


//show empty spaces
var answerArray = [ ];

for (var i = 0; i < hiddenword.length; i++) {
 answerArray[i] = "_";
}

var remainingLetters = hiddenword.length;

//when letter is guessed
   // keep track (print out for player) & make sure its legal
    //compare to word, show if matching 
    // put in wrong letter array otherwise
var guessLetter;
var wrongGuessedLetters = [ ];
    wrongGuessedLetters.length = 9;
    
//loop through everytime, like question game
    //set number of loops (10), display
    //end when wrong guess array full
    while (remainingLetters > 0) {



    }

//if all letters are guessed, esccape/win
    //if loops run out/lose
    var showLives = document.getElementById("mylives");
      // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

//record/display number of wins
    //automaticly restart after loss or win