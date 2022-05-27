// Write your code here:
const shoutGreetings = (array) =>
  array.map((e) => {
    return e.toUpperCase() + "!";
  });

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
