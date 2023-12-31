const resetButton = document.getElementById('reset-button')
const peopleInput = document.getElementById('people-input')
const billInput = document.getElementById('bill-input')
const tips = document.getElementsByName('tip')
const totalPerson = document.getElementById('total-person')
const tipPerson = document.getElementById('tip-person')
const errorMessage = document.getElementById('error-message')
const customTip = document.getElementById('custom-tip')

let tipValue = 0
let peopleValue = 0
let billValue = 0
let billForOne = 0

peopleInput.addEventListener('input', event => {
    event.target.value = event.target.value.match(/(?<!-)\d+/g)
    if (event.target.value === "0" || event.target.value === "00" || event.target.value === "000") {
        peopleInput.classList.add('error-border')
        errorMessage.classList.remove('hidden')
    } else {
        if (peopleInput.classList.contains('error-border')) {
            peopleInput.classList.remove('error-border')
            errorMessage.classList.add('hidden')
        }
        peopleValue = Number(event.target.value)
        refreshPerson()
    }
})

billInput.addEventListener('input', event => {
    event.target.value = event.target.value.match(/^-?\d+\.?\d*$/g)
    billValue = (Number(event.target.value)).toFixed(2)
    refreshPerson()
})

customTip.addEventListener('input', event => {
    uncheckTips()
    event.target.value = event.target.value.match(/(?<!-)\d+/g)
    tipValue = (Number(event.target.value)/100).toFixed(2)
    refreshPerson()
})

tips.forEach((tip) => {
    tip.addEventListener('change', event => {
        tipValue = Number(event.target.value)
        customTip.innerHTML = ''
        refreshPerson()
    })
})

resetButton.addEventListener('click', event => {
    event.preventDefault()
    tipValue = 0
    peopleValue = 0
    billValue = 0
    peopleInput.value = ''
    billInput.value = ''
    customTip.value = ''
    emptyPerson()
    uncheckTips()
})

function refreshPerson() {
    billForOne = (billValue/peopleValue).toFixed(2)
    if ((billValue > 0) && (tipValue > 0) && (peopleValue > 0)) {
        totalPerson.innerHTML = '$'+(billForOne * ( 1 + Number(tipValue))).toFixed(2)
        tipPerson.innerHTML = '$'+(billForOne * tipValue).toFixed(2)
    } else {
        emptyPerson()
    }
}

function uncheckTips() {
    tips.forEach((tip) => {
        tip.checked = false
    }) 
}

function emptyPerson() {
    totalPerson.innerHTML = ''
    tipPerson.innerHTML = ''
}