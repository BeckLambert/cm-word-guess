var Letter = require("./Letter");

function Word(word) {
    this.word = word;
    this.letters = [];

    this.makeWords = function() {
        var wordArr = this.word.split("");
        for(var i = 0; i < wordArr.length; i++) {
            var newLetter = new Letter(wordArr[i]);
            this.letters.push(newLetter);
        }
    }

    this.guesses = function(guess) {
        this.letters.forEach(letter => {
            letter.checkLetter(guess);
        });
    }
}






module.exports = Word;