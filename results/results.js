import { BAG } from '../constants.js';

const resultsSpan = document.getElementById('results-span');
const playAgainButton = document.getElementById('play-again-button');

console.log(resultsSpan);
console.log(playAgainButton);


const item = localStorage.getItem(BAG);
const parsedItem = JSON.parse(item);
console.log(item);


const pokemonCaught = [];
const pokemonLabels = [];
const pokemonEncountered = [];


//*****FOR LOOP*****
for (let i = 0; i < parsedItem.length; i++) {
    const bagItem = parsedItem[i];

    pokemonCaught.push(bagItem.captured);
    pokemonLabels.push(bagItem.name);    
    pokemonEncountered.push(bagItem.encountered)
}

console.log(pokemonCaught);
console.log(pokemonLabels);
console.log(pokemonEncountered);




resultsSpan.textContent = 'Your Results!' + item + pokemonCaught + ' ' + pokemonLabels + ' ' + pokemonEncountered;


//*****PLAY AGAIN button*****
playAgainButton.addEventListener('click', () => {
    console.log('Play Again clicked');

    localStorage.clear();   
    window.location = '../index.html';
})





var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonLabels,
        datasets: [{
            label: '# of Votes',
            data: pokemonCaught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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







//import { getFromLocalStorage } from '../app.js';

/*
function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    const parsedItem =  JSON.parse(item);

    return parsedItem
}

const finalResults = getFromLocalStorage(BAG);

console.log(finalResults);

*/


/*

const pokemonCaught = [];
const pokemonLabels = [];

for (let i = 0; i < item.length; i++) {
    const bagItem = item[i];

    pokemonCaught.push(bagItem.captured);
    pokemonLabels.push(bagItem.id);    
}

console.log(pokemonCaught['id']);
console.log(pokemonLabels);

*/