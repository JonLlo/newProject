// Write your code below
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }

  //
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Write your code below
var bobsFollowers = ['Dave','Jao Felix', 'Tadhg', 'Alice']
var tinasFollowers = ['Jao Felix', 'Nursultan', 'Alice']
var mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; i++ ) {
    if (tinasFollowers[j]===bobsFollowers[i]) {
      mutualFollowers.unshift(tinasFollowers[j])
    }
  }
}
//while loop:
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard
while (currentCard !='spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
//whale talk
input = 'Hello there how are you doing?';
const vowels = ['a','e','i','o','u'];
var resultArray = []
for (let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === input[i]) {
          resultArray.push(input[i])
          if (j===1 || j ===4) {
            resultArray.push(vowels[j])
          }
      }
    }
  }
  console.log(resultArray)


//methods:
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
alienShip = { 
  retreat () {
    console.log(retreatMessage)
  }
}
alienShip.takeOff = function () {
  console.log('Spim... Borp... Glix... Blastoff!')
}
alienShip.retreat()
alienShip.takeOff()

//nested objects:
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
var capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [{p1: 'JL'}, {p2: 'JD'}, {p3: 'TG'}]
var firstPassenger = spaceship.passengers[0]
//
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Pass by reference
function greenEnergy(object) {
object['Fuel Type']='avocado oil'
}
function remotelyDisable(object) { 
  object.disabled = true
}
remotelyDisable(spaceship)
console.log(spaceship)
greenEnergy(spaceship) 
console.log(spaceship)

//looping through objects:
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
for (const x in spaceship.crew) {console.log(`${x}: ${spaceship.crew[x].name}`);
}


for (x in spaceship.crew) {
console.log(`${spaceship.crew[x].name} : ${spaceship.crew[x].degree}` )
}

//Let’s review what we learned in this lesson:

//Objects store collections of key-value pairs.
//Each key-value pair is a property—when a property is a function it is known as a method.
//An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
//You can access, add or edit a property within an object by using dot notation or bracket notation.
//We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
//We can navigate complex, nested objects by chaining operators.
//Objects are mutable—we can change their properties even when they’re declared with const.
//Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
//We can iterate through objects using the For...in syntax.
METHODS:
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
