'use strict';

const categories = document.getElementById('categories')
const score = document.getElementById('score')

window.addEventListener('load', fillData)

function fillData() {

    let totalScore = 0
    let categoriesNumber = 0

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        categoriesNumber = data.length
        for (let i=0; i<data.length; i++) {
            categories.innerHTML += `
                <li class="right-part__category category">
                    <div class="cat-card ${data[i].category.toLowerCase()}">
                        <div class="cat-left">
                            <img class="cat-icon" src=${data[i].icon} alt="icon for reaction">
                            <span class="cat-name">${data[i].category}</span>
                        </div>
                        <div class="cat-right">
                            <span class="cat-score">${data[i].score}</span>
                            <span> / 100</span>
                        </div>
                    </div>   
                </li>`
            totalScore = totalScore + data[i].score
        }

    score.innerHTML = Math.floor(totalScore/categoriesNumber)

    })  

}