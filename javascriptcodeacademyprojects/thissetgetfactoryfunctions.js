//this
const robot = {
    model : '1E78V2', energyLevel : 100,
    provideInfo () { return `I am ${this.model} and my current energy level is 
    ${this.energyLevel}`
    }
    }
    console.log(robot.provideInfo())
//getters:

    const robot2 = {
        _model: '1E78V2',
        _energyLevel: 100,
        get energyLevel () {
          if (typeof this._energyLevel ==='number') {
            return `My current energy level is ${this._energyLevel}`
          }
          else {
            return 'System malfunction: cannot retrieve energy level'
          }
        }};
      console.log(robot2.energyLevel)
      
//setters:
      
const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    set numOfSensors(num){
      if(typeof this._numOfSensors === 'number' && num >=0){
        this._numOfSensors = num 
      }
      else {console.log('Pass in a number that is greater than or equal to 0')}
  
    },
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    }
  };
  robot3.numOfSensors = 100;
  console.log(robot.numOfSensors)

  //factory functions:
  const robotFactory = (model,mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep () {
        console.log('Beep Boop')
      }
    }
  }
  const tinCan = robotFactory('P-500',true)
  console.log(tinCan.mobile)


  //Property Value Shorthand
  //Destructured Assignment
  //Built-in Object Methods -> object entries/object keys/Object.assign()
/*
  Review
  Congratulations on finishing Advanced Objects!
  
  Let’s review the concepts covered in this lesson:
  
  The object that a method belongs to is called the calling object.
  The this keyword refers to the calling object and can be used to access properties of the calling object.
  Methods do not automatically have access to other internal properties of the calling object.
  The value of this depends on where the this is being accessed from.
  We cannot use arrow functions as methods if we want to access other internal properties.
  JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
  The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
  Setters and getter methods allow for more detailed ways of accessing and assigning properties.
  Factory functions allow us to create object instances quickly and repeatedly.
  There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
  As with any concept, it is a good skill to learn how to use the documentation with objects!
  You’re ready to start leveraging more elegant code for creating and accessing objects in your code!
  
  Instructions
  If you want to challenge yourself:
  
  Find the value of this in a function inside of a method.
  Learn the outcome of using a property that has the exact same name as a setter/getter method.
  Create a new factory function that can create object instances of your choice.
  Read documentation on other destructuring techniques and apply it to your code.
  Try out other built-in object methods and learn what they do.
  Concept Review
  Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
  Community Forums
  Here are some helpful links to the top questions asked by coders about this exercise:
  
  Why console logging this in an arrow function inside a method logs the object and when set as a value of an object property it shows {}?
  Still have questions? View this exercise's thread in the Codecademy Forums.
  Code Editor
  
  
  1
  Run
  
  Output-only Terminal
  Output:
*/ 

