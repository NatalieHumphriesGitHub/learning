/*Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function.*/

// Write function below
const factorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      for (let i = num -1; i>= 1; i--) {
        num *= i;
      }
    return num;
    }
  }
  
  console.log(factorial(6)); 

  /*Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

  Examples:
  
  subLength('Saturday', 'a'); // returns 6
  subLength('summer', 'm'); // returns 2
  subLength('digitize', 'i'); // returns 0
  subLength('cheesecake', 'k'); // returns 0*/
  
  // Write function below
const subLength = (str, char) => {
    let charCount = 0; //variable to count how many times the character appears
    let len = -1; //variable to establish length between characters
   
  //for loop to check if char is in the string
    for (let i=0; i<str.length; i++) {
      if (str[i] == char) {
        charCount++; //if yes, add it to charcount
        if (charCount > 2) {
          return 0;
        } //if more than 2, return 0
        if (len == -1) { //this identifies if it is the first index it has come across because len is still -1
          len = i; //this is the first index
        } else { //if len is not -1, it is the second letter 
          len = i - len + 1 //so that means we take that index and minus the first index and then plus 1 to include both letters
        }
      }
    }
    if (charCount < 2) { //if less than 2
      return 0;
    }
    return len;
  };
  
  //console.log
  subLength('saturdtays', 't')