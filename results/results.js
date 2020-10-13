//import { myPokemonArray } from '../app.js';
//import data from '../data.js';

//getFromLocalStorage

//import { getFromLocalStorage } from '../app.js';
import { BAG } from '../constants.js';


const resultsSpan = document.getElementById('results-span');
const playAgainButton = document.getElementById('play-again-button');

console.log(resultsSpan);
console.log(playAgainButton);


const item = localStorage.getItem(BAG);
JSON.parse(item);
console.log(item);
resultsSpan.textContent = 'Your Results!' + item;


//*****PLAY AGAIN button*****
playAgainButton.addEventListener('click', () => {
    console.log('Play Again clicked');

    window.location = '../index.html';
})
