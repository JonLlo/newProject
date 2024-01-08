//functions as parameters:
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => { var checkA = val + 2;
       var checkB = func(val);
       if (checkA === checkB) {
        return checkB
       }
       else {
        return 'inconsistent results'
       }
  
  };
  
  console.log(checkConsistentOutput(addTwo,5));
///////////iterators
//for each method:
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruit){console.log(`I want to eat a ${fruit}`)})
//map method:
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(x => {
  return x[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = 
bigNumbers.map(x => {
  return x/100
})

const shoutGreetings = arr => arr.map(x => x.toUpperCase() + '!')

console.log(shoutGreetings(['hi']))



////////////filtermethod:
const randomNumbers_1 = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers_1= randomNumbers_1.filter(x => {return x < 250;
});
console.log(smallNumbers_1);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(x => {return x.length > 7;
});
console.log(longFavoriteWords);


///finding stuff in both arrays (justCoolStuff)
const justCoolStuff = (arr_1, arr_2) => (arr_1).filter(x => arr_2.includes(x));




//findindexmethod:

const animals_2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals_2.findIndex(x => {
  return x === 'elephant'
});
const startsWithS = animals_2.findIndex(x => {
  return x[0] === 's'
})
console.log(startsWithS)
//the reduce method: 
const newNumbers = [1, 3, 5, 7];
const newSum 
= newNumbers.reduce((accumulator,currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
}, 10);

//sum method, every method
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

console.log(interestingWords.every((word) => word.length > 5 ));
//


//is every dinner vegan?

const isTheDinnerVegan = arr => {return arr.every(x => x.source === 'plant' )};

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'pladnt'}];

console.log(isTheDinnerVegan(meal)); 

/* 
Review
Awesome job on clearing the iterators lesson! You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let’s review!

.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
Instructions
If you want to challenge yourself:

Define a callback function before you use it in a iterator.
Chain two iteration methods on the same array.
Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)
Use .reduce() to take a multi-layered array and return a single layer array from scratch.
*/

////////////////////////decline and accept everything:
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);

}

const acceptEverything = (arr) => {
arr.forEach(x => console.log('Ok, I guess I will eat some ' + x + '.'));

}

acceptEverything(['broccoli', 'spinach', 'cauliflower', 'broccoflower'])
///squarenums:

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num =>  num * num


// Create the secretMessage array below

const squareNums = (x) => 
x.map(toSquare);



////sort:

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:



const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth - b.numTeeth);



//findmykeys:

const findMyKeys = arr => {return arr.findIndex(x => {return x === "keys"})
}





// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))


