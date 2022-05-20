/*This code changes a string to whale language, which is taking out all the vowels from a sentence and doubling the "e" and "u"*/ 

const input = "This is how whales talk don't you know"
const vowels = ["a", "e", "i", "o", "u"]
const resultArray = []

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e")
    resultArray.push(input[i]); //this is adding the extra e and u to the results array
  if (input[i] === "u")
    resultArray.push(input[i]);
  for (let j = 0; j < vowels.length; j++) //this is a nested loop checking for each letter in the string if it is a vowel, and if so adding it to the results
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j])
    };
}

console.log(resultArray)

const resultString = resultArray.join("");

console.log(resultString.toUpperCase())