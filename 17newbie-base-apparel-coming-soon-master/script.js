const errorMessage = document.getElementById('error-message')
const emailInput = document.getElementById('email-input')
const buttonInput = document.getElementById('button-input')

buttonInput.addEventListener('click', event => {
    event.preventDefault()
    removeErrorMessage()
    if (!(String(emailInput.value).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) 
    { 
     addErrorMessage()
    }
})

function removeErrorMessage() {
    emailInput.classList.remove('error')
    errorMessage.classList.add('hidden')
}

function addErrorMessage() {
    emailInput.classList.add('error')
    errorMessage.classList.remove('hidden')
}