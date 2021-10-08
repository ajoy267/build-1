// import functions and grab DOM elements
const button = document.getElementById('generate');
const resultMessage = document.getElementById('random-num');
// initialize global state
let randomNum = Math.ceil(Math.random() * 10000000);
// set event listeners 
button.addEventListener('click', () => {
    resultMessage.textContent = randomNum;
    randomNum = Math.ceil(Math.random() * 10000000);
});
