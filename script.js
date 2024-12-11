//costanti e variabili
const displayNumberElm = document.getElementById('display-numbers')
const timerElm = document.getElementById('timer')
const inputUser = document.getElementById('input-fields')
const btnCheckElm = document.getElementById('check-btn')
const rememberElm = document.getElementById('remember')
const resultElm = document.getElementById('result')
const remberFisrtNumbersElm = document.getElementById('rember-first-number')
const input1Elm = document.getElementById('input1')
const input2Elm = document.getElementById('input2')
const input3Elm = document.getElementById('input3')
const input4Elm = document.getElementById('input4')
const input5Elm = document.getElementById('input5')
const numberRandomElm = generateNumbers ()
let timeLeft = 5;

// funzione
    //generatori di 5 numeri casuali
function generateNumbers () {
    const randomNumbers = []
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 101));
    }
    return randomNumbers
}
    //mostrare i numeri
    displayNumberElm.innerHTML = numberRandomElm  

    //mostra i numeri per 5 secondi
        const timerInterval = setInterval(() => {
            if (timeLeft === -1) {
                clearInterval(timerInterval);
                displayNumberElm.classList.add('hidden')
                timerElm.classList.add('hidden')
                inputUser.classList.remove('hidden')
                rememberElm.classList.remove('hidden')
                remberFisrtNumbersElm.classList.add('hidden')
                input1Elm.classList.remove('hidden')
                input2Elm.classList.remove('hidden')
                input3Elm.classList.remove('hidden')
                input4Elm.classList.remove('hidden')
                input5Elm.classList.remove('hidden')

            } else {
                timerElm.innerHTML = timeLeft
                timeLeft--;
            }
        }, 1000);

        // Verifica i numeri quando si preme "Verifica"
        btnCheckElm.addEventListener('click', () => {
    
            const userNumbers = [
                document.getElementById('input1').value,
                document.getElementById('input2').value,
                document.getElementById('input3').value,
                document.getElementById('input4').value,
                document.getElementById('input5').value,
            ];

    // Array per memorizzare i numeri corretti
    const correctNumbers = [];

    for (let i = 0; i < numberRandomElm.length; i++) {
        if (userNumbers.includes(numberRandomElm[i].toString())) {
            correctNumbers.push(numberRandomElm[i]);
        }
    }

    // Mostrare il risultato
    resultElm.innerHTML = `
        Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}
    `;
});       