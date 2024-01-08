let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
var early = true;
var age = 18;
if (age > 18 && early) {
  raceNumber +=1000;
}
console.log(raceNumber);

if (age > 18 && early) {
  console.log(`You will race at 9:30 and your race number is ${raceNumber}`)
}
else if (age > 18 && !early) {
console.log(`You will race at 11am and your race number is ${raceNumber}`)
}
else if (age < 18) {
console.log(`You will race at 12:30pm and your race number is ${raceNumber}`)
}
else {
console.log(`See registration deck`)
}