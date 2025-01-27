const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');
/*
setInterval(function () {
    code
}, 1000);
*/

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

