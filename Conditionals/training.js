//This project is to fix the below code - the fixed code is on the training-fixed.js file

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);  //this will produce the same random number if the function is called twice, so the variable should be local within the function

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = events => {        //here a let days variable should be declared locally and then the lets deleted from the if statement
                                          //this means that the else if statements are changing the one days variable rather than defining new ones
  if (events === 'Marathon') {
    let days = 50;
  } else if (events === 'Triathlon') {
    let days = 100;
  } else if (events === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight       
const logEvent = events => {               //need to add name as a parameter for the function because there's a lot of repetition defining the name variable within two functions
  const name = 'Nala';                    //this variable should be globally defined as other functions use it
  console.log(`${name}'s event is: ${events}`);
};

const logTime = days => {                  //need to add name as a parameter for the function as above
  const name = 'Nala';                      //this variable should be globally defined as other functions use it
  console.log(`${name}'s time to train is: ${days} days`);
};

const events = getRandEvent();
const days = getTrainingDays(events);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(events); //need to add the name parameter to call the functions
logTime(days);
