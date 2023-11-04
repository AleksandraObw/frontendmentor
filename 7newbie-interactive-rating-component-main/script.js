'use strict';

const submitButton = document.getElementById('button-submit')
const radioButtons = document.querySelectorAll('input[type="radio"]')
const yourRating = document.getElementById('your-rating')
const rateCard = document.getElementById('rate-card')
const thanksCard = document.getElementById('thanks-card')
const error = document.getElementById('error')

submitButton.addEventListener('click', event => {
    event.preventDefault();
    let rating;
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            rating = radioButton.value
        } 
    }
    if (rating) {
        yourRating.innerHTML = `You selected ${rating} out of 5`
        rateCard.classList.add('hidden')
        rateCard.classList.remove('rate-card')
        thanksCard.classList.add('thanks-card')
        thanksCard.classList.remove('hidden')
        error.classList.add('hidden')
    } else {
        error.classList.remove('hidden')
    }
   
})


