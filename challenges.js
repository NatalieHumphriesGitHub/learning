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

/* Challenge 4 
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'*/

// Write your function here:
const lifePhase = age => {
  if (age < 0 || age > 140) {
    return 'This is not a valid age';
  } else if (age < 4) {
    return 'baby';
  } else if (age < 13) {
    return 'child';
  } else if (age < 20) {
    return 'teen';
  } else if (age < 65) {
    return 'adult'
  } else {
    return 'senior citizen'
  }
};

console.log(lifePhase(99))

/*Challenge 5 

Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'*/

const finalGrade = (score1, score2, score3) => {
  if ((score1 < 0 || score1 > 100) || (score2 < 0 || score2 > 100) || (score3 < 0 || score3 > 100)) {
    return 'You have entered an invalid grade.';
  }
  let finalScore = (score1 + score2 + score3)/3;
  if (finalScore < 60) {
    return 'F';
  } else if (finalScore < 70) {
    return 'D';
  } else if (finalScore < 80) {
    return 'C';
  } else if (finalScore < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(finalGrade(99, 82, 67)) 

//Challenge 6 - Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`
  };
     
  console.log(reportingForDuty('Private', 'Fido'))

  //Challenge 7 - We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?

//original code

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.random() * 6 + 1
    let die2 = Math.random() * 6 + 1
    return die1 + die2
}

//fixed code

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1) //added math.floor to round it down to 1 and not zero plus added math floor to make it a full number
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}

/*Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'*/

// if/else statement
const calculateWeight = (earthWeight, planet) => {
  if (planet === 'Mercury') {
    return earthWeight * 0.378;
  } else if (planet === 'Venus') {
    return earthWeight * 0.907;
  } else if (planet === 'Mars') {
    return earthWeight * 0.377;
  } else if (planet === 'Jupiter') {
    return earthWeight * 2.36;
  } else if (planet === 'Saturn') {
    return earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
};

// switch statement
const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case 'Mercury':
      return earthWeight * 0.378;
      break;
    case 'Venus':
      return earthWeight * 0.907;
      break;
    case 'Mars':
      return earthWeight * 0.377;
      break;
    case 'Jupiter':
      return earthWeight * 2.36;
      break;
    case 'Saturn':
      return earthWeight * 0.916;
      break;
    default:
     return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
};

console.log(calculateWeight(100, 'Saturn')) 
