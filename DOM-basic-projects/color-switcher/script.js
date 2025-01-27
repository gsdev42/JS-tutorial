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