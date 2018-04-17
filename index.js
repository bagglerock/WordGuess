(function runGame() {
  var inquirer = require("inquirer");
  var Word = require("./word");
  var wordBank = ["subaru", "honda", "toyota", "nissan", "mitsubishi"];

  //functions:

  function chooseWord() {
      //chooses the word.. wisely mwhahahahahah
      var randomNumber = Math.floor(Math.random() * wordBank.length);
      var randomWord = wordBank[randomNumber].toLowerCase();
      var newWord = new Word(randomWord);
      playGame(newWord);
  }

  function playGame(word) {
      //play the game
      inquirer
      .prompt([
        {
          name: 'letterChoice',
          message: 'Pick a letter',
          type: 'input'
        }
      ])
      .then(function(selectedLetter) {
      });


      //keep going
      //chooseWord();
  }
  
  
  //start
  chooseWord();


})();
