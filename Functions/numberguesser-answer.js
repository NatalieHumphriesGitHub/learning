let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    
    return humanDifference <= computerDifference;               //this is a shortened version of an if statement - it will return true or false in response to that statement
}

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;                   //this is a quick way of adding 1 to the variable
    } else if (winner === "computer") {
        computerScore++;
    }
} 

const advanceRound = () => currentRoundNumber++;


//I massively over-complicated this exercise because I didn't realise it was linked to the html on the page, so I was printing everything to the console