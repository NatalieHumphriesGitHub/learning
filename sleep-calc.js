const getSleepHours = day => {      //creating a switch statement to get the number of hours sleep a day
    switch(day) {
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 7;
        break;
      case 'Wednesday':
        return 6;
        break;
      case 'Thursday':
        return 10;
        break;
      case 'Friday':
        return 10;
        break;
      case 'Saturday':
        return 10;
        break;
      case 'Sunday':
        return 9;
        break;
      default: 
      return "Error!"
    }
  };
  
  //console.log(getSleepHours('Sunday')); (checking that the above works)
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  //creating a concise function that adds up all the weekly sleep hours
  //console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {    //function with no parameters because the ideal hours are declared within the function
    let idealHours = 8;
    return (idealHours * 7);
  };
  //console.log(getIdealSleepHours())
  const calculateSleepDebt = () => {            //as above re the function
    const actualSleepHours = getActualSleepHours(); //declaring the variable by calling the function
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours < idealSleepHours) {
      console.log("You've had " + (idealSleepHours - actualSleepHours) + " hours less sleep this week - Go to bed!");} 
      else if (actualSleepHours > idealSleepHours) {
     console.log("Get up, you've had enough sleep - " + (actualSleepHours - idealSleepHours) + " hours more to be precise!")
  } else {
    return "Error, something went wrong!"}
  };
  
  console.log(calculateSleepDebt()); //calling the sleep calculator
  