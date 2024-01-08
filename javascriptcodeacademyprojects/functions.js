//function expressions
const plantNeedsWater = function(day){
  if (day === 'Wednesday')
    return true;
  else
    return false;
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));
//Arrow functions:
const plantNeedsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//Consise body arrow functions
//If we have a function:

const squareNum = (num) => {
  return num * num;
};
//We can refactor the function to:

const squareNum2 = num => num * num;

// Arrow functions vs function expression vs anonomous function vs function declaration
console.log('hello')
