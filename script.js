//constanti e variabili
let randomNumbers = []
const displayNumberElm = document.getElementById('display-numbers')

function generateNumbers () {
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
}