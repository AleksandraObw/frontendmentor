'use strict'

const containers = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.q-text')
const arrows = document.querySelectorAll('.q-arrow')

containers.forEach (e => {
    e.addEventListener('click', event => {
       
        let parent = event.target.parentElement.parentElement
        if (event.target.classList.contains('question')) {
            parent = event.target.parentElement
        }

        closeAllAnswers()
        openChosen(parent)
    })

    })


function closeAllAnswers() {
    answers.forEach (event => {
        event.classList.add('hidden')
    })
    questions.forEach (event => {
        event.classList.remove('active')
    })
    arrows.forEach (event => {
        event.classList.remove('open')
    })
}

function openChosen(faq) {
    const qArrow = faq.querySelector('.q-arrow') 
    const qText = faq.querySelector('.q-text')
    const qAnswer = faq.querySelector('.answer')

    qText.classList.add('active')
    qArrow.classList.add('open')
    qAnswer.classList.remove('hidden')
}