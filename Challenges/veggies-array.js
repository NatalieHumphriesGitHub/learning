/*Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!*/






const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = array => {
 array.forEach(politelyDecline)   //the brief was that the function had to actually use the function, not simply pass it as an argument. This now will use the array as the parameter for the politelyDecline argument (I assume)
};

console.log(declineEverything(veggies));

const acceptEverything = array => {
  array.forEach(e => { //using e to define each element in the list
    console.log(`Ok, I guess I will eat some ${e}.`)
  }
  )
  };


acceptEverything(veggies);