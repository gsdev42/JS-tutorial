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
### Project 2:
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