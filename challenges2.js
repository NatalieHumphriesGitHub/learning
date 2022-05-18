/* Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]' */

const howOld = (age, year) => {
    const birthYear = (2022 - age);
    let newAge = (year - birthYear);
     if (year < birthYear) {
       return `The year ${year} was ${newAge * -1} years before you were born`
     }
     if (year > 2022) {
       return `You will be ${newAge} in the year ${year}`
     } else {
       return `You were ${newAge} in the year ${year}`
     }
    };
    
    console.log(howOld(36, 2036))
    
    //Challenge 11 - original code to be fixed 

    const whatRelation = percentSharedDNA => {
        if (percentSharedDNA === 100) {
            return 'You are likely identical twins.'
        }
        if (percentSharedDNA > 34) {
            return 'You are likely parent and child or full siblings.'
        }
        if (percentSharedDNA < 13) {
            return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
        }
        if (percentSharedDNA > 5) {
            return 'You are likely 1st cousins.'
        }
        if (percentSharedDNA > 2) {
            return 'You are likely 2nd cousins.'
        }
        if (percentSharedDNA > 0) {
            return 'You are likely 3rd cousins'
        }
        return 'You are likely not related.'
    }
    
    console.log(whatRelation(34))
    // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    
    console.log(whatRelation(3))
    // Should print 'You are likely 2nd cousins.'


    //fixed code 

    const whatRelation = percentSharedDNA => {
        if (percentSharedDNA === 100) {
            return 'You are likely identical twins.'
        } else if (percentSharedDNA < 3) {
            return 'You are likely 3rd cousins'
        } else if (percentSharedDNA < 5) {
            return 'You are likely 2nd cousins.'
        } else if (percentSharedDNA < 14) {
            return 'You are likely 1st cousins.'
        } else if (percentSharedDNA < 35) {
            return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
        } else if (percentSharedDNA < 99) {
            return 'You are likely parent and child or full siblings.'   
        } else {
        return 'You are likely not related.'
        }
    }
    
    console.log(whatRelation(34))
    // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    
    console.log(whatRelation(3))
    // Should print 'You are likely 2nd cousins.'
    

    //challenge 12
    /*Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.
    Return the tip, as a number, based on the following:
    ‘bad’ should return a 5% tip
    ‘ok’ should return a 15% tip
    ‘good’ should return a 20% tip
    ‘excellent’ should return a 30% tip
    all other inputs should default to 18%*/

    const tipCalculator = (quality, total) => {
        switch (quality) {
        case 'bad': 
        return total * .05;
        break;
        case 'ok':
        return total * .15;
        break;
        case 'good':
        return total * .20;
        break;
        case 'excellent':
        return total * .30;
        break;
        default: 
        return total * .18;
        break;
        }
      };

//challenge 13
/*Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'*/

const toEmoticon = emotion => {
    switch(emotion) {
      case 'shrug': 
      return '|_{"}_|';
      break;
      case 'smiley face':
      return ':)';
      break;
      case 'frowny face':
      return ':(';
      break;
      case 'winky face':
      return ';)';
      break;
      case 'heart':
      return '<3';
      break;
      default:
      return '|_(* ~ *)_|';
      break;
    }
    };

//Challenge 14
/* Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.
If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.
If not, return the string 'That is a nice color.'*/

const colorMessage = (favoriteColor, shirtColor) => {
    if (favoriteColor === shirtColor) {
      return 'The shirt is your favorite color!';
    } else {
      return 'That is a nice color.';
    }
    };
    
    console.log(colorMessage('red','blue'))

//challenge 15
//Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.

const isEven = number => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
    };
    
    console.log(isEven(0));

//challenge 16

/*Create a function numberDigits() that takes the variable x as its only parameter.
If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:
'One digit: 5'
If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:
'Two digits: 12'
Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:
'The number is: -202'*/

numberDigits = x => {
    if (x < 0 || x > 99) {
      return `The number is: ${x}`;
    } else if (x < 10) {
      return `One digit: ${x}`;
    } else {
      return `Two digits: ${x}`;
    }
    };
    
    console.log(numberDigits(-100));
    

