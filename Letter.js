function Letter(character) {
        this.character = character;
        this.guessed = false;

        this.getCharacter = function() {
            if(!this.guessed) {
              return "_";
            } else {
              return this.character;
            };
          };
        
          this.checkLetter = function(guess) {
            if(guess === this.character) {
              this.guessed = true;
            };
          };
};

// var letter = new Letter("a");
// console.log(letter);
module.exports = Letter;