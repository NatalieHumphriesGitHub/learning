const newNumbers = [1, 3, 5, 7]; //this method basically adds everything in the list together

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue)
return accumulator + currentValue;
});

console.log(newSum)

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue)
return accumulator + currentValue;
},10);                                  //this starts the reduction at 10 instead of 1

console.log(newSum) //the new total will be 10 plus the total above which is 26