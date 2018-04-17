var Letter = function(letter) {

  this.letter = letter;
  this.placeholder = "_";
  this.guessed = false;

  this.showLetter = function(){
      if(this.guessed){
          this.placeholder = this.letter;
      }
      return this.placeholder;
  }

  this.checkLetter = function(testLetter){
      if (testLetter === this.letter){
          this.guessed = true;
          return true;
      } else {
          return false;
      }
  }

};

module.exports = Letter;
