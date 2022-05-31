// Write your code here:

const isVegan = food => {  //first create a function to check if each food source is vegan
    if (food.source === 'plant') {
      return true;
    } else {
      return false;
    }
   };
  
  const isTheDinnerVegan = meal => ((meal.every(isVegan)));
  //then check that every item of the array meets the above function's criteria
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))
  // Should print false
  