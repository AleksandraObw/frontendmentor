const itemsList = document.getElementById('items-list')
const radios = document.querySelectorAll('input')

window.onload = fillList('daily')

radios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (radio.checked) {
            fillList(radio.value)
        }
    })
}
)

function fillList(timePeriod) {
    itemsList.innerHTML = ``
    let jsonFile = `data.json`
    fetch(jsonFile)
    .then((response) => response.json()) 
    .then((data) => {
            for (let i=0; i<data.length; i++) {
                if (timePeriod == 'daily') {
                    itemsList.innerHTML += `
                            <li class="item">
                                <div class="info-block">
                                    <div class="top-title">
                                        <p class="title">${data[i].title}</p>
                                        <p class="more">...</p>
                                    </div>
                                    <div class="week-block" id="timeList">
                                        <p class="current-week"><span class="current-hours" id="current-week">${data[i].timeframes.daily.current}</span>hrs</p>
                                        <p class="last-week">Last Week - <span class="last-hours" id="previous-week">${data[i].timeframes.daily.previous}</span>hrs</p>
                                    </div>
                                </div>        
                            </li>
                    `
                } else if (timePeriod == 'weekly') {
                    itemsList.innerHTML += `
                        <li class="item">
                            <div class="info-block">
                                <div class="top-title">
                                    <p class="title">${data[i].title}</p>
                                    <p class="more">...</p>
                                </div>
                                <div class="week-block" id="timeList">
                                    <p class="current-week"><span class="current-hours" id="current-week">${data[i].timeframes.weekly.current}</span>hrs</p>
                                    <p class="last-week">Last Week - <span class="last-hours" id="previous-week">${data[i].timeframes.weekly.previous}</span>hrs</p>
                                </div>
                            </div>        
                        </li>
                    `
                } else {                    
                    itemsList.innerHTML += `
                        <li class="item">
                            <div class="info-block">
                                <div class="top-title">
                                    <p class="title">${data[i].title}</p>
                                    <p class="more">...</p>
                                </div>
                                <div class="week-block" id="timeList">
                                    <p class="current-week"><span class="current-hours" id="current-week">${data[i].timeframes.monthly.current}</span>hrs</p>
                                    <p class="last-week">Last Week - <span class="last-hours" id="previous-week">${data[i].timeframes.monthly.previous}</span>hrs</p>
                                </div>
                            </div>        
                        </li>
                    `
                }
            }
    })    
}
