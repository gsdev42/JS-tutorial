### Project 1: Background color switcher
##### Solution code:
`script.js`
``````javascript
const buttons = document.querySelectorAll(".btn")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(event.target)
        console.log(event)
        if (event.target.id == 'grey') {
            body.style.backgroundColor = event.target.id

        }
        if (event.target.id == 'white') {
            body.style.backgroundColor = event.target.id
            
        }
        if (event.target.id == 'blue') {
            body.style.backgroundColor = event.target.id
            
        }
    })

 })
```````

-----
### Project 2:BMI calculator
##### Solution code:
`script.js`

```````````javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      if (bmi < 18.6) {
        results.innerHTML = `<span>${bmi}</span> - You are underweight`;
      } else if (bmi >= 18.6 && bmi < 24.9) {
        results.innerHTML = `<span>${bmi}</span> - You are normal weight`;
      } else if (bmi >= 24.9 && bmi < 29.9) {
        results.innerHTML = `<span>${bmi}</span> - You are overweight`;
      } 
  }
});

```````````
-----------
##### Project 3: Digital Clock
`script.js`

````````javascript
const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
````````
- syntax of `setInterval`
````````javascript
setInterval(function () {
  //code
}, 1000);
````````
------------------
##### Project 4: Number Guessing game

````````javascript
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
````````