let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate a random number between 0 and 9
const generateTarget = () => {
  let targetNumber = Math.floor(Math.random() * 10);  //I made this too complicated by creating this let targetnumber variable - I could just have the function return the number
  return targetNumber; //this variable wasn't required
};

//input of the guesses each time - this wasn't required because it was in the html
//let humanGuess = 8
//let computerGuess = 2
//let targetNumber = generateTarget()

//function to evaluate the winner
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {  //this function was fine but should have evaluated to true or false so could have been a lot simpler
  let computerResult = Math.abs(targetNumber - computerGuess);
  let humanResult = Math.abs(targetNumber - humanGuess);
  let finalResult;
  if (humanResult > computerResult) {
    return finalResult = 'computer';
  } else {
    return finalResult = 'human';
  }
};


//updating the score function - this function was fine
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1; 
} else {
    computerScore += 1;
  }
};

//updating the round function - this function was fine 
const advanceRound = () => {
return currentRoundNumber += 1;
};

while (currentRoundNumber < 10) {       //this was all completely unnecessary lol 
  let humanGuess = 8
  let computerGuess = 2
  let targetNumber = generateTarget()
  console.log(`human guess : ${humanGuess}`);
  console.log(`computer guess : ${computerGuess}`);
  console.log(`target number : ${targetNumber}`);
//calling the winner function
  winner = compareGuesses(humanGuess, computerGuess, targetNumber);
  updateScore(winner);
  console.log(`The winner is ${winner}`);
  //output of the game
  console.log(`Human Score : ${humanScore}`);
  console.log(`Computer Score : ${computerScore}`);
  //calling the advance round output
  advanceRound();
  console.log(`Round Number: ${currentRoundNumber}`);
};






