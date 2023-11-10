'use strict'

const list = document.getElementById('list')

let date = new Date()
let today = date.getDay()

document.addEventListener('DOMContentLoaded', () => {
   correctCurrentDay()
   fillTheChart() 
})


function correctCurrentDay() {
    if (today === 0) {
        today = 7
    }
}

function fillTheChart() {
    fetch('data.json')
    .then(Response => Response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if (i+1 === today) {
                list.innerHTML+= `
                <li class="chart__element element">
                    <div class="list__day day">
                        <div class="list__amount day-amount active">
                            <p class="day-amount__number number">$${data[i].amount}</p>  
                        </div>
                        <div class="day__rectangle rectangle today" id="day${i+1}" style="height: ${data[i].amount * 3}px"></div>
                        <p class="day__name name">${data[i].day}</p>
                    </div>
                </li>`
            } else {
                list.innerHTML+= `
                <li class="chart__element element">
                    <div class="list__day day">
                    <div class="list__amount day-amount hiding">
                        <p class="day-amount__number number">$${data[i].amount}</p>  
                    </div>
                    <div class="day__rectangle rectangle" id="day${i+1}" style="height: ${data[i].amount * 3}px"></div>
                    <p class="day__name name">${data[i].day}</p>
                    </div>
                </li>`
            }
            
        }
    })
}




