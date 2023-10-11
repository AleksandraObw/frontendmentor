const nameInput = document.querySelector('.name-input')
const lastNameInput = document.querySelector('.last-name-input')
const emailInput = document.querySelector('.email-input')
const pwInput = document.querySelector('.pw-input')
const formBtn = document.querySelector('.button-input')

const nameError = document.querySelector('.form__name-input-error')
const nameErrorSign = document.querySelector('.name-error-sign')
const lastNameError = document.querySelector('.form__last-name-input-error')
const lastNameErrorSign = document.querySelector('.last-name-error-sign')
const emailError = document.querySelector('.form_email-input-error')
const emailErrorSign = document.querySelector('.email-error-sign')
const pwError = document.querySelector('.form__pw-input-error')
const pwErrorSign = document.querySelector('.pw-error-sign')

formBtn.addEventListener('click', event => {
    event.preventDefault();
    emptyErrorClasses();
    if (!nameInput.value) {
        nameInput.classList.add('error');
        nameError.classList.remove('hidden');
        nameErrorSign.classList.remove('hidden');
    }
    if (!lastNameInput.value) {
        lastNameInput.classList.add('error');
        lastNameError.classList.remove('hidden');
        lastNameErrorSign.classList.remove('hidden');
    }
    if (!pwInput.value) {
        pwInput.classList.add('error');
        pwError.classList.remove('hidden');
        pwErrorSign.classList.remove('hidden');
    }
    if (!(String(emailInput.value).match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) 
      { 
        emailInput.classList.add('error');
        emailError.classList.remove('hidden');
        emailErrorSign.classList.remove('hidden');
      }
})

function emptyErrorClasses() {
    nameInput.classList.remove('error');
    nameError.classList.add('hidden');
    nameErrorSign.classList.add('hidden');
    lastNameInput.classList.remove('error');
    lastNameError.classList.add('hidden');
    lastNameErrorSign.classList.add('hidden');
    pwInput.classList.remove('error');
    pwError.classList.add('hidden');
    pwErrorSign.classList.add('hidden');
    emailInput.classList.remove('error');
    emailError.classList.add('hidden');
    emailErrorSign.classList.add('hidden');
}