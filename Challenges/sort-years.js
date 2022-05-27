// Write your code here:
const sortYears = array => array.sort((a,b) => b-a);

//this is using the inbuilt sort method - if you wanted it in ascending order, you would have a-b 

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))