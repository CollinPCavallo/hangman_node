//Used to create an object representing the current word the user is attempting to guess.This should contain word specific logic and data.

const Letter = require('./letter.js')

function Word() {
    this.underscores = [];
    this.letterInstance = [];
    this.word = "";
    this.genUndercores = function (word) {
        this.word = word;
        for (var i = 0; i < this.word.length; i++) {
            this.letterInstance.push(new Letter(word[i]))
            this.underscores.push(this.letterInstance[i].makeBlanks())
        };

        // console.log(this.letterInstance)
        // console.log(this.underscores)
        showUnder(this.underscores)
    }
    this.userGuess = function (userGuess) {
        //take in a leter
        var userGuess = userGuess

        //see if that letter is in the word
        for (var i = 0; i < this.underscores.length; i++) {
            if (this.letterInstance[i].doesExists(userGuess)) {
                this.underscores[i] = this.letterInstance[i].makeBlanks()


            }

        }
        showUnder(this.underscores)
        //if it is show the letter
        //store that letter in the correct place ni underscore
        //update the consoles underscore
    }
}

function showUnder(underscores) {
    console.log(underscores.join(" "))
}

// var currentWord = game.wordPicked;
// var blanks = letter.showBlank();
// console.log(currentWord)
// console.log(blanks)

module.exports = Word;