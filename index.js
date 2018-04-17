(function runGame() {
  var inquirer = require("inquirer");
  var Word = require("./word");
  var wordBank = ["subaru", "honda", "toyota", "nissan", "mitsubishi"];
  var guesses = [];
  var wrongCount;

  //functions:

  function chooseWord() {
    var randomNumber = Math.floor(Math.random() * wordBank.length);
    var randomWord = wordBank[randomNumber].toLowerCase();
    var newWord = new Word(randomWord);
    newWord.addLetters();
    guesses = [];
    wrongCount = 10;
    playGame(newWord);
  }

  function playGame(word) {
    word.showWord();
    showGuessesRemaining();
    //play the game
    inquirer
      .prompt([
        {
          name: "letterChoice",
          message: "Pick a letter",
          type: "input"
        }
      ])
      .then(function(selectedLetter) {
        var letter = selectedLetter.letterChoice;
        if (guesses.indexOf(letter) === -1) {
          guesses.push(letter);
          if (!word.guess(letter)) {
            console.log(letter + " is not in the word.");
            wrongCount--;
            showGuessesRemaining();
          }
        } else {
          console.log("you already chose that letter. try again.");
        }
        checkState(word);
      });
  }

  function showGuessesRemaining() {
    console.log("you have " + wrongCount + " guesses remaining");
  }

  function checkState(word) {
    if (word.isComplete()) {
      console.log("good job you win. The word is ");
      word.showWord();
      console.log("New Word");
      chooseWord();
    } else if (wrongCount > 0) {
      playGame(word);
    } else {
      console.log(
        "you get nothing! you lose! good day sir!"
      );
      console.log("New Word");
      chooseWord();
    }
  }

  //start
  console.log("New Game");
  chooseWord();
})();
