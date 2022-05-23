const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

onsole.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

//map method - this takes a function and uses it to return a new array


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal => {
  return animal[0]; //returns the first letter of each animal
})

console.log(secretMessage)
console.log(secretMessage.join('')); //using the join method to make it not look like an array

const bigNumbers = [100, 200, 300, 400, 500];


// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(number => {
  return number/100;
})

console.log(smallNumbers)