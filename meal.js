const menu = {
    _meal : '',
    _price : 0, 
  set meal(mealToCheck) {                       //checking that the _meal is a string before allowing it to be updated 
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  get meal() {                                  //checking that meal is a string before allowing to be got
    if (typeof this._meal === 'string') {
      return this._meal
      }
    },
  get price() {
    if (typeof this._price === 'number') {
      return this._price
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {                                    //checking that meal and price exist before printing the specials
      return `Today's Special is ${this._meal} for £${this._price}`
    } else {
      'Meal or price was not set correctly!'
    }
  }
  };
  
  menu.meal = 'chicken';  //setting the meal
  menu.price = 20;  //setting the price
  
  console.log(menu.todaysSpecial)   //calling the getter method for the special