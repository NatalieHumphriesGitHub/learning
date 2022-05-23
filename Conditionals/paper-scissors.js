const getUserChoice = userInput => {                                          //creating a function using the arrow function - there is no brackets because there is only one parameter
    userInput = userInput.toLowerCase();                                      //within the function, always changing the userInput to lowercase - don't forget to capitalise the LowerCase
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {  //this is a check to ensure that the user doesn't put in something random for the game
      return userInput;
    } else {
      console.log("invalid input");
    }}
    
    getUserChoice('paper');    // - test to check above function works
    
   //this is an example of doing the random choice with if else statements rather than the switch method
   
    /*const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 0) {
        return console.log("rock");
      } else if (randomNumber === 1) {
        return console.log("scissors");
      } else {
        return console.log("paper");
      }}*/
    
    //getComputerChoice(); (checking that the above function works)
    
    const getComputerChoice = () => {                                       //creating a function without parameters because it just does a calculation within itself
      const randomNumber = Math.floor(Math.random() * 3);                   //producing a random number between 0 and 2
      switch (randomNumber) {                                               //switch method - simpler to read than an if else statement
        case 0:
          return 'rock';
        case 1:
          return 'scissors';
        case 2: 
         return 'paper';
      }
    }
    
    console.log(getComputerChoice()) // - test to check above function works
    
    const determineWinner = (userChoice, computerChoice) => {  //creating a function to determine the winner - there are two parameters, the user choice and the computer choice - these haven't been defined yet
      if (userChoice === computerChoice) {      //first if statement - if both choices are the same, it is a tie
        return "The game was a tie!";
      } 
      if (userChoice === 'rock') {                  //this is a nested if - if user chooses rock AND if computer chooses paper
        if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'paper') {                 //same as above
        if (computerChoice === 'scissors') {
        return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'scissors') {          //same as above
        if (computerChoice === 'rock') {
         return 'The computer won!';
        } else {
          return 'You won!'
          }
        }
      if (userChoice === 'bomb') {              //bomb is an easter egg secret weapon which wins all 
        return 'You win with the secret weapon!'
      }
    };
      
    console.log(determineWinner('paper', 'rock')); //testing the function and checking the right statements print
    console.log(determineWinner('scissors', 'rock'));
    console.log(determineWinner('paper', 'scissors'));
    console.log(determineWinner('rock', 'rock'));
    
    const playGame = () => {                            //this is the game function - it has no parameters because the variables are defined within the function
      const userChoice = getUserChoice('bomb');         //this calls the userchoice function to create the userChoice variable and we manually pass in the one parameter
      const computerChoice = getComputerChoice();       //this calls the computer choice function to create the variable
      console.log("You chose " + userChoice);           //this gives the statement of what the user chose
      console.log("The computer chose " + computerChoice); //as above for the computer
      console.log(determineWinner(userChoice, computerChoice)); //this calls the determine winner function, passing the two variables as arguments into the function and therefore declares the winner
    };
    
    playGame(); //this calls the playGame function
    