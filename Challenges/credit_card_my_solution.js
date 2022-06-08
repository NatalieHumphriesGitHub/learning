// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


/* This function checks if a credit card array is valid. To be valid it needs to do the following: 

Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
Sum up all the digits in the credit card number.
If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

The function returns true or false */

const validateCred = array => {
let newArray = 0 //create a new variable for the numbers to be added to - this will total the numbers and is not an array
for (let i = array.length-1; i >=0; i--) { //need to make the loop go backwards to work from right to left
  let ccNumber = array[i]; //create a new variable so that we can manipulate the numbers
  if ((array.length - 1 - i) % 2 === 1) { //if the index is an odd number (i.e. every second one)
    ccNumber = array[i] * 2; //multiply it by 2
    if (ccNumber > 9) {     // if it is over 9
      ccNumber = ccNumber - 9    //subtract 9
    };
    newArray += ccNumber; //add it to the total
  } else {
    newArray += ccNumber //add it to the total if it is an even index
  } 
 }
 if (newArray % 10 === 0) //checks if it can be evenly divided by 10
{return true;
} else { 
  return false;
}
};

/*console.log(validateCred(mystery1))
console.log(validateCred(mystery2))
console.log(validateCred(mystery3))
console.log(validateCred(mystery4))
console.log(validateCred(mystery5))*/

/*this function looks at a nested array of card numbers to check for invalid numbers and add it to a new array of only invalid numbers*/

const findInvalidCards = array => { 
  let invalidCards = [];  //create a new array for the invalid cards
  for (i = 0; i < array.length; i++) { //for loop
    let currCard = array[i]; //create a variable for the card we are checking
    if(!validateCred(currCard)){  //if the function is not true, push it to the invalidCards array
      invalidCards.push(currCard)
    }
  }
  return invalidCards //need to use the return keyword if you want to use the function value again
}

const invalidBatch = (findInvalidCards(batch)) //creating a variable for the output of the function for invalid cards to use in the next function

console.log(invalidBatch)

/*this function checks the invalid card numbers to see what they start with to identify the company issuing it and create a new array with them in it. There should be no duplicate companies*/

const idInvalidCardCompanies = array => {
  let companies = [];  //create a new array to keep the companies in
  for (let i = 0; i < array.length; i++) { //for loop to iterate the arrays
    if (array[i][0] === 3) { //checks that the first digit in the first array is 3
    companies.push('AMEX')  //pushes AMEX to the array
  } else if (array[i][0] === 4) {
    companies.push('VISA')
  } else if (array[i][0] === 5) {
    companies.push('Mastercard')
  } else if (array[i][0] === 6) {
    companies.push('Discover')
  } else {
    console.log('Company not found')
  }
  }
  const newCompanies = [...new Set(companies)]; //this converts the array to a set to remove duplicates and then back to an array again
  return newCompanies
}

console.log(idInvalidCardCompanies(invalidBatch))
