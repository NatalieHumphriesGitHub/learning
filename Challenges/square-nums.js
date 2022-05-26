const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = arr => arr.map(toSquare) //this is calling the toSquare function for each element of the array and mapping it to a new array called squareNums

console.log(squareNums(numbers)) //need to pass in the array
/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/