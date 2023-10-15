'use strict';

const button = document.querySelector('#button')
const number = document.querySelector('#number')
const advice = document.querySelector('#advice')

window.onload = loadAdvice
button.addEventListener('click', loadAdvice)

function loadAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        return response.json();
    })
    .then((body) => {
        number.innerHTML = `advice #${body.slip.id}`;
        advice.innerHTML = `"${body.slip.advice}"`;
    })
}