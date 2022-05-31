// Write function below
//need to use a for loop to add them to a new string

const groceries = array => {
    let arrayList = ''; //new variable
    for (let i = 0; i < array.length; i++) //for each index in this list
    {
       arrayList += array[i].item; //call the index first and then identify the .item - keep the if block within these curly braces, don't make new ones
       if (i < array.length - 2) //if i is less than 4-2 in this case, add a comma
       {
      arrayList += ', ';
    } else if (i === array.length - 2) //this is because it will be 4 words, but the last index is three and we want the index before that, so minus 2
    {
      arrayList += " and ";
    }
    } //close the function before doing the return array
    return arrayList;
  }
  
  console.log(groceries([{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]))