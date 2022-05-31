//Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

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
  
  console.log(subLength('saturdtays', 't'))