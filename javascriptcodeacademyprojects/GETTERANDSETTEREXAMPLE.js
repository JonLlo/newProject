  //MEALMAKER PROJECT:

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for £ ${this._price}`
        }
      
       else {
          return 'Meal or price was not set correctly!'
          }
    }}
  
  menu.meal = 'curry'
  menu.price = 4
  console.log(menu)
  console.log(menu.todaysSpecial)
  
  
  //TEAMSTATS PROJECT:

  const team = {
    _players : [
      {firstname: 'Jonny', sirname: 'Lloyd', age: 25}, {firstname: 'Josh', sirname: 'Hopper', age: 26},
      {firstname: 'River', sirname: 'Blake', age: 24}
    ],
    _games : [{opponent: 'Dean', teamPoints: 35, opponentPoints: 22}, {opponent: 'Sally', teamPoints: 5, opponentPoints: 12},
      {opponent: 'Jim', teamPoints: 19, opponentPoints: 26}],
    
    get players() { 
      return this._players;
      },
    get games() { 
      return this._games;
      },
  
    addPlayer (newfirstname,newsirname,newage) { const newPlayer = {firstname: newfirstname, sirname: newsirname, age: newage}
    this._players.push(newPlayer);
    },
  
    addGame(newOpponent,newteamPoints,newOpponentPoints) {
    const newGameresults = {opponent: newOpponent, teamPoints: newteamPoints, opponentPoints: newOpponentPoints}
    this._games.push(newGameresults);
  }
  }
  team.addGame('Titans',100,98);
  console.log(team._games);
  
  
  //DOGFACTORY:

  // Write your code here:
const dogFactory = (name,breed,weight) => { 
    const object = 
    {name: name, 
    breed: breed, 
    weight: weight,
    get _name() {
      return this.name;
    },
    get _breed() {
      return this.breed;
    },
    get _weight() {
      return this.weight;
    },
    bark() {
      return 'ruff! ruff!';
    } ,
    eatTooManyTreats() {
      this.weight = this.weight + 1;
    } 
    }
    return object
    }
  