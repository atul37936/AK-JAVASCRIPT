// Number guessing game – Generate a random number, let user guess (loop until correct).

const prompt = require('prompt-sync')();
let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let userGuess = 0
let win = false
let attempt = 0

console.log("Welcome to the Number Guessing Game! type 0 to exit in game");

while (true) {
  let userInput = prompt("Guess a number (1-100): ");

  if (userInput === '0') {
    console.log("Exiting game... The number was " + randomNumber);
    break; 
  }
  userGuess = parseInt(userInput);
  attempt++;

  if(!userGuess || isNaN(userGuess)){
     console.log("Invalid input! Please enter a number.");
     continue;
  }
   if(userGuess === randomNumber){
    console.log(`Congratulations! You've guessed the number ${randomNumber} in ${attempt} attempts!`);
    break;
  }else if(userGuess > randomNumber){
     console.log("Too high! Try again.");
  }else if(userGuess < randomNumber){
     console.log("Too low! Try again.");
   }

}