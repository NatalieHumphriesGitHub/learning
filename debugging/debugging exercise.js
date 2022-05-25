function capitalizeASingleWord(word) {
    console.log(word) //debugging - check that word is what we expected
    if (word.match(' ')) {
    console.log('Word value inside of if statement: ' + word); //check to see which words go into the if statement - we would expect hey ho to, but only hey did therefore the logic of the if statement was wrong
      return null;
    }
    
    let firstLetter = word.charAt(0);
    const restOfWord = word.slice(1);
    
    firstLetter = firstLetter.toUpperCase();
    
    return firstLetter + restOfWord;
  }
  
  // Should return "Hey"
  console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 
  
  // Should return null
  console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));