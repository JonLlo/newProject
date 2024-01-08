//reverse array:
// Write your code here:

const reverseArray = (arr) => {
    let newArr = []
    for (let i = arr.length -1; i > -1;i--) {
        newArr[arr.length - 1 - i] = arr[i]
    }
    return newArr
    }
    
    
    
    
    
    
    
    // When you're ready to test your code, uncomment the below and run:
    
    const sentence = ['sense.','make', 'all', 'will', 'This'];
    
    console.log(reverseArray(sentence)) 
    // Should print ['This', 'will', 'all', 'make', 'sense.'];
    
    /////////////////////GREET ALIENS
    // Write your code here:
const greetAliens = (arr) => {
    for (let i = 0; i <arr.length; i++) {
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
  }
  greetAliens(['a','b'])