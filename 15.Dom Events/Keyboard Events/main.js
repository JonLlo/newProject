let ball = document.getElementById('float-circle');

// Write your code below
//1
function up() {
  ball.style.bottom = '250px'
}
//2
function down() {
  ball.style.bottom = '50px'
}
//3
document.addEventListener('keydown',up);
document.addEventListener('keyup',down);
