var Word = require("./Word");
var inquirer = require("inquirer");

var words = ["athens", "crete", "delphi", "mykonos", "santorini", "agios sostis"];
var guesses;
var pickedWords;
var word;
var pickedWord;

function playGame() {
    pickedWord = "";
    guesses = 10;
    if(pickedWords.length < words.length) {
        pickedWord = getWord();
    } else {
        console.log("Good job, you won!");
        continuePrompt();
    }
    if(pickedWord) {
        word = new Word(pickedWord);
        word.makeLetters();
        makeGuess();
    }
};

function getWord () {
    var rand = Math.floor(Math.random() * words.length);
    var randWord = words[rand];
    if(pickedWords.indexOf(randWord) === -1) {
        pickedWords.push(randWord);
        return randWord
    } else {
        return getWord();
    }
};

function makeGuess() {
    var checker = [];
    inquirer
        .prompt([
            {
                name: "guessedLetter",
                message: word.update() + 
                    "\nGuess a letter!" +
                        "\nGuesses left: " + guesses
            }
        ]).then(data => {
            word.letters.forEach(letter => {
                letter.checkLetter(data.guessedLetter);
                checker.push(letter.getCharacter());
            });
            if(guesses > 0 && checker.indexOf("_") !== -1) {
                guesses--;
                if(guesses === 0) {
                    console.log("No more guesses. Game over!");
                    continuePrompt();
                } else {
                    makeGuess();
                }
            } else {
                console.log("You guessed it!");
                console.log(word.update());
                playGame();
            }
        });
};

function continuePrompt() {
    inquirer
        .prompt([
            {
               name: "continue",
               type: "list",
               message: "Do you want to guess another word?",
               choices: ["Yes", "No"]
            }
        ]).then(data => {
            if(data.continue === "Yes") {
            } else {
                console.log("Thanks for playing!");
            }
        });
}

