const addTwo = num => {  //this is taking a number and adding 2
    return num + 2;
  }
  
  //to check the function works correctly, this function takes the func as a parameter plus the number that is being input as the argument above
  const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;  //this checks the maths is the number plus 2
  let checkB = func(val);     //this calls the function with the value
  if (checkA === checkB) { //this checks that they match
    return func(val)
  } else {
    return 'inconsistent results'
  }
  }
  
  console.log(checkConsistentOutput(addTwo, 4)); //this uses the checking function and calls the original function
  
  console.log(addTwo(4))
  