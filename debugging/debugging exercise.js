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


/*Debugging with console.log()
Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.
This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs. Let’s try this debugging process again in practice.*/

