import { BAG } from '../constants.js';

const playAgainButton = document.getElementById('play-again-button');

const item = localStorage.getItem(BAG);
const parsedItem = JSON.parse(item);



const table = document.querySelector('tbody')

for (let i = 0; i < parsedItem.length; i++) {
    const myItem = parsedItem[i];

    const tr = document.createElement('tr')
    const tdPokemon = document.createElement('td')
    const tdCaptured = document.createElement('td')
    const tdEncountered = document.createElement('td')
    const imgPokemon = document.createElement('img');

/*
    console.log(tr);
    console.log(tdPokemon);
    console.log(tdCaptured);
    console.log(tdEncountered);
*/
console.log(myItem);


    tdPokemon.textContent = myItem.name;

    imgPokemon.src = myItem.url;
    imgPokemon.alt = `${name}`;
    imgPokemon.style.height = '50px';
    imgPokemon.style.width = '50px';


    tdCaptured.textContent = myItem.captured;
//console.log(tdCaptured.textContent = myItem.captured);

    tdEncountered.textContent = myItem.encountered;
//console.log(tdCaptured.textContent = myItem.encountered);

    tr.append(imgPokemon, tdPokemon, tdCaptured, tdEncountered);

    table.appendChild(tr);
}









const pokemonCaught = parsedItem.map((bagItem) => {
    return bagItem.captured;
});

const pokemonLabels = parsedItem.map((bagItem) => {
    return bagItem.name;
});

const pokemonEncountered = parsedItem.map((bagItem) => {
    return bagItem.encountered;
});

const pokemonImage = parsedItem.map((bagItem) => {
    return bagItem.url_image;
});

console.log(pokemonImage);










//*****PLAY AGAIN button*****
playAgainButton.addEventListener('click', () => {
    console.log('Play Again clicked');

    localStorage.clear();   
    window.location = '../index.html';
})

//*****CHART 1*****
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonLabels,
        datasets: [{
            label: '# of Pokemon Captured',
            data: pokemonCaught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//*****CHART 1*****
var ctx = document.getElementById('myOtherChart').getContext('2d');
var myOtherChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonLabels,
        datasets: [{
            label: '# of Pokemon Encountered',
            data: pokemonEncountered,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});