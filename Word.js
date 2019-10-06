var Letter = require("./Letter");

function Word(word) {
    this.word = word;
    this.letters = [];

    this.makeWords = function() {
        var wordArr = this.word.split("");
        console.log(wordArr);
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

    this.update = function() {
        var printedWord = "";
        this.letters.forEach(letter => {
            printedWord += letter.getCharacter() + " ";
        });
        return printedWord;
    }
}


var cat = new Word("cat");
// console.log(cat);
console.log(cat.makeWords());
// console.log(cat.guesses());
console.log(cat.update());


module.exports = Word;