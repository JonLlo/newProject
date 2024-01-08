//-> How to change the inside of a dom via javascript: document.body.innerHTML = '<h1>This is now the heading of the body element. </h1>'; 

document.querySelector('h1').innerHTML ='Most popular Harry Potter characters'
document.getElementById('fourth').innerHTML = 'Professor Snape'
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';
document.getElementsByTagName('li')[0].innerHTML = 'Dobby';


document.body.style.backgroundColor = 'green';
document.getElementsByClassName('ranking')[0].style.fontFamily = 'Impact'

let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';
first.parentNode.style.backgroundColor = 'beige'