// console.log(Math.random());
// // outputs like 0.03260930654879024 b/w 0 and 1
// //multiply by 100 to get b/w 0 and 100
//it can give zero also so we add 1 to make sure it is not zero
// console.log(Math.random()*100+1);
//also we can use Math.floor or parseInt to get integer value
// console.log(Math.floor(Math.random()*100+1));
let randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    
}

function checkGuess(guess) {
    //randomvalue ke equal h ya nhi
    if (guess === randomNumber) {
        displayMessage("Congratulations! You guessed the number right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Wrong! Guess Higher");
    }else if(guess > randomNumber){
        displayMessage("Wrong! Guess Lower");
    }
}

function displayGuess(guess) {
    //cleanup userinput
    //add guess to guessslot
    //increment numguess
    //decrement remaining guess
    //remaining val update
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
    
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${ message };</h2>`;
    
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''; //guessslot cleaned
        lowOrHi.innerHTML = ''; //loworhi cleaned
        remaining.innerHTML = `${11 - numGuess}`; //remaining cleaned
        userInput.removeAttribute('disabled'); //input field enabled
        startOver.removeChild(p); //remove button

        playGame = true;
    })
    
}
function endGame() {
    userInput.value = ''; //cleaned this val
    userInput.setAttribute('disabled', ''); //input field disabled
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Want to play again?</h2>`;
    //h2 ke text par click kroge then newgame function call hoga
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
