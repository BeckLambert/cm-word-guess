var Letter = require("./Letter");

function Word(word) {
    this.word = word;
    this.letters = [];

    this.makeWords = function() {
        var wordArr = this.word.split("");
        for(var i = 0; i < this.wordArr.length; i++) {
            var newLetter = new Letter(wordArr[i]);
            this.letters.push(newLetter);
        }
    }

    this.guesses = function(guess) {
        this.letters.forEach(letter => {
            letter.checkLetter(guess);
        });
    }

    this.update = function() {
        var printedWord = "";
        this.letters.forEach(letter => {
            printedWord += letter.getCharacter() + " ";
        });
        return printedWord;
    }
}






module.exports = Word;