var Letter = require("./letter");

var Word = function(word) {
    this.letterBank = [];
    this.word = word

    this.addLetters = function() {
        for (var i = 0 ; i < this.word.length ; i++ ){
            this.letterBank.push(new Letter(word[i]));
        }
    
    };

    this.showWord = function() {
        var displayWord = "";
        for (var i = 0 ; i < this.letterBank.length ; i++ ){
            //console.log(this.letterBank[i].placeholder);
            var displayLetter = this.letterBank[i].showLetter();
            displayWord += displayLetter + " ";
        }
        console.log(displayWord);
    }

    this.guess = function(guess) {
        for (var i = 0 ; i < this.letterBank.length ; i++ ){
            this.letterBank[i].checkLetter(guess);
            console.log(this.letterBank[i].checkLetter(guess));
        }
        this.showWord();
    }

}

var testWord = new Word("ruby");
testWord.addLetters();
testWord.showWord();
testWord.guess("u");
testWord.guess("y");

module.exports = Word;