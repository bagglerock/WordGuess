var Letter = function(letter) {

  this.letter = letter;
  this.placeholder = "_";
  this.guessed = false;

  this.showLetter = function(){
      if(this.guessed){
          this.placeholder = this.letter;
      }
      return this.placeholder;
      //console.log(this.placeholder);
  }

  this.checkLetter = function(testLetter){
      if (testLetter === this.letter){
          this.guessed = true;
          return true;
      } else {
          return false;
          //console.log("this letter does not match");
      }
  }

};

//var testLetter = new Letter("a");
//testLetter.checkLetter("a");
//testLetter.showLetter();

module.exports = Letter;
