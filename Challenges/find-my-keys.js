// Write your code here:
const myKeys = index => (index === 'keys'); //create a function which looks for the word keys

const findMyKeys = array => array.findIndex(myKeys); //use findIndex of the word keys using the function created above

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys','used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
