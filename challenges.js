//Challenge 1 
//Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

const greetWorld = () => {
  return 'Hello, World!'
};

console.log(greetWorld());


//The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

// Write your function here:
const canIVote = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

// ternary operator option - more concise code

const canIVote = age => age >= 18 ? true : false //no need for curly braces here

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(18)) // Should print true

//Challenge 3
//Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

//ternary operator option

const agreeOrDisagree = (string1, string2) => (string1 === string2) ? 'You agree!' : 'You disagree!'

//if else option

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return 'You agree!'
  } else {
    return 'You disagree!'
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'