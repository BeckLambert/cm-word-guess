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