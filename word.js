var Letter = require("./letter");

var Word = function(word) {
  this.letterBank = [];
  this.word = word;

  this.addLetters = function() {
    for (var i = 0; i < this.word.length; i++) {
      this.letterBank.push(new Letter(word[i]));
    }
  };

  this.showWord = function() {
    var displayWord = "";
    for (var i = 0; i < this.letterBank.length; i++) {
      var displayLetter = this.letterBank[i].showLetter();
      displayWord += displayLetter + " ";
    }
    console.log(displayWord);
  };

  this.guess = function(guess) {
    var contains = false;
    for (var i = 0; i < this.letterBank.length; i++) {
      this.letterBank[i].checkLetter(guess);
      if (this.letterBank[i].checkLetter(guess)) {
        contains = true;
      }
    }
    if (contains) {
      return true;
    }
  };

  this.isComplete = function() {
    var hasUnderscore = false;
    for (var i = 0; i < this.letterBank.length; i++) {
      if (!this.letterBank[i].guessed) {
        hasUnderscore = true;
      }
    }
    if (hasUnderscore) {
      return false;
    } else {
      return true;
    }
  };
};

module.exports = Word;
