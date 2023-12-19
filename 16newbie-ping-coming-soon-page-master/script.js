const inputButton = document.getElementById('input-button')
const inputEmail = document.getElementById('input-email')
const emailError = document.getElementById('email-error')

inputButton.addEventListener('click', (e) => {
    e.preventDefault()
    removeErrorMessage()
    if (!(String(inputEmail.value).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) 
    { 
     addErrorMessage()
    }
})

function addErrorMessage() {
    emailError.classList.remove('hidden')
    inputEmail.classList.add('red')
    inputEmail.classList.remove('blue')
}

function removeErrorMessage() {
    emailError.classList.add('hidden')
    inputEmail.classList.remove('red')
    inputEmail.classList.add('blue')
}