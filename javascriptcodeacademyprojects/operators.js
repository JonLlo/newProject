
//truthy/falsy////////////////////////////////////////////////////////////////////

let tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

//here if 'tool' is falsy i.e. empty, which it isn't, then writingUtensil = "pen",
//as it isn't empty, it will equal tool.

console.log(`The ${writingUtensil} is mightier than the sword.`);

//truthy/falsy
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//ternary operators

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

//switch functions

var userName = 'Jon';
userName ? console.log(`Hello ${userName}`) : console.log('hello!');
var userQuestion = 'How are you today?';
console.log(`${userName}, ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
var eightball = '';

switch (randomNumber) {
  case 0:
    eightball = 'It is certain'
    break;
  case 1:
    eightball = 'It is decidedly so'
    break;
  case 2:
    eightball = 'Reply hazy try again'
    break;
  case 3:
    eightball = 'Cannot predict now'
    break;
  case 4:
    eightball = 'Do not count on it'
    break;
  case 5:
    eightball = 'My sources say no'
    break;
  case 6:
    eightball = 'Outlook not so good'
    break;
  case 7:
    eightball = 'Outlook not so good'
    break;
  case 8:
    eightball = 'Signs point to yes'
    break;
}
console.log(eightball);

