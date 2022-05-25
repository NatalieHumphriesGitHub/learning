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