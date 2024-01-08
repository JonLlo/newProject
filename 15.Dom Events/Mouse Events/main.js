// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
//1
let increaseWidth = function() {
     itemOne.style.width ='401px'

}
//2
itemOne.addEventListener('mouseover',increaseWidth);

//3
let changeBackground = function() {
     itemTwo.style.backgroundColor ='blue'

}
//4
itemTwo.addEventListener('mouseup',changeBackground);
//5
let changeText = function() {
     itemThree.innerHTML ='The mouse has left the element'
}
//6
itemThree.addEventListener('mouseout', changeText)
//7
let showItem = function() {
     itemFive.style.display ='block'
}
//8
itemFour.addEventListener('mousedown', showItem)


