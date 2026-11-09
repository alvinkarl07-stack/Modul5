function init() {
let myButton = document.getElementById('myButton');
myButton.onclick = onClick;
}
function onClick() {
let myButton = document.getElementById('myButton');
myButton.innerText = 'Don*t click me again!';
}

window.onload = init;