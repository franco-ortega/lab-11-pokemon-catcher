import { BAG } from '../constants.js';

const resultsSpan = document.getElementById('results-span');
const playAgainButton = document.getElementById('play-again-button');

console.log(resultsSpan);
console.log(playAgainButton);


const item = localStorage.getItem(BAG);
//const stringyItem = JSON.parse(item);
console.log(item);

resultsSpan.textContent = 'Your Results!' + item;



const pokemonCaught = [];
const pokemonLabels = [];

for (let i = 0; i < item.length; i++) {
    const bagItem = item[i];

    pokemonCaught.push(bagItem.captured);
    pokemonLabels.push(bagItem.id);    
}

console.log(pokemonCaught['id']);
console.log(pokemonLabels);


//*****PLAY AGAIN button*****
playAgainButton.addEventListener('click', () => {
    console.log('Play Again clicked');

    localStorage.clear();   
    window.location = '../index.html';
})









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