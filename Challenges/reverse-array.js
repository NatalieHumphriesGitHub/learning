/*Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!*/

// Write your code here:
const reverseArray = (arr) => {
    let reversed = []; //create an empty array
    for (let i = arr.length - 1; i >= 0; i--) { //start at the last indice, until index = 0, reduce i by 1 each time
     reversed.push(arr[i]) //push the work into the reversed array
     } return reversed; //return the reversed array
  };
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ["sense.", "make", "all", "will", "This"];
  
  console.log(reverseArray(sentence));
  // Should print ['This', 'will', 'all', 'make', 'sense.'];

  //greet aliens
  /*Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”*/

// Write your code here:
const greetAliens = (aliens) => {
    for (let alien in aliens) {
      console.log(
        `Oh powerful ${aliens[alien]}, we humans offer our unconditional surrender!`
      );
    }
  };
  
   const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  
  /*Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.*/

  // Write your code here:
const convertToBaby = array => {
    babyArray = []
    for (let i = 0; i < array.length; i++) {
      babyArray.push('baby ' + array[i])};
    return babyArray;
    };
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  
