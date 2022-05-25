let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');  //splits paragraph into array
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0         //make a variable to count the number of words
storyWords = storyWords.filter(word => {
  return word != unnecessaryWord;  //filtering out the unnecessary words
})

storyWords.forEach(word => {
count++;   //for each word, add one to the count variable
});

storyWords = storyWords.map(word => { //map makes a new array
  if (word === misspelledWord) { 
    return "beautiful"
  } else {
    return word;
  }
})

const badWordIndex = storyWords.findIndex(word => {
  return word === badWord; //find the index of the bad word
})

console.log(badWordIndex)

storyWords[78] = 'really' //use the index to replace the word

const lengthCheck = storyWords.every(word => {
 word.length < 10 
});

console.log(lengthCheck)

const longWordIndex = storyWords.findIndex(word => {
  return word.length > 10; //finding the index of a word that is over 10 characters
})

console.log(longWordIndex)

storyWords[111] = 'dazzling' //replacing the long word

console.log(count)
console.log(storyWords.join(' ')); //rejoining the paragraph together with a space 