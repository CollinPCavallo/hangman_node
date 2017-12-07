const inquirer = require("inquirer");
const Word = require("./word.js");
var wordConstr = new Word();
var guessesLeft = 10
var wordBank = ["Javascipt", "test word"];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(currentWord)

function startGame(){
    inquirer.prompt([{
        type: "confirm",
        name: "startgame",
        message: "Welcome to the Programers Hangman, would you like to play?"
    }]).then(response => {

        if (response.startgame === true) {
            wordConstr.genUndercores(currentWord);
            askForLetter();
        }else {
            console.log("Okay, come back soon!")
        }
    });
}

function askForLetter() {
    // wordConstr.genUndercores(currentWord);
    console.log(guessesLeft)
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Please Enter A letter"
    }]).then(answers => {
        guessesLeft = guessesLeft;
        console.log(answers.userGuess);
        var guess = answers.userGuess
        wordConstr.userGuess(guess);
        if (wordConstr.underscores.join("") != currentWord) {
            guessesLeft--
            askForLetter();
            if (guessesLeft === 0){
                console.log( "\n GAME OVER")
                process.exit();


            }


        }
    });
};
startGame();