//example 1

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//example 2 - for.Each method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

//arrow function
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))

//function expression method
fruits.forEach(function(fruit) {
  console.log(`I want to eat a ${fruit}`)
})

//function declaration - create a function first and then call it for each
function eatFruit(fruit){
  console.log(`I want to eat a ${fruit}`);
}

fruits.forEach(eatFruit);