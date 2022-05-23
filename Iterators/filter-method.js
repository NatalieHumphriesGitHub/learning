//filter - must always have a true or false function that it tests against to filter items into a new array

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

console.log(longFavoriteWords)


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below - some finds out if anything in the array meets the condition and evaluates to true

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array of words with more than 5 characters

const interestingWords = words.filter(word => {
 return word.length > 5;
});


// Checking that every word in the array has more than 5 letters

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));
