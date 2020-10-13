// import functions and grab DOM elements

import data from './data.js'

const roundsPlayed = document.querySelector('.rounds-played')
const radioButtons = document.querySelectorAll('input')
const images = document.querySelectorAll('label > img');
const pokemonCaught = 0;
const pokemonEncountered = 0;

console.log(roundsPlayed, radioButtons, images);

console.group('Radio Buttons')
    console.info(radioButtons[0]);
    console.info(radioButtons[1]); 
        console.info(radioButtons[2]);
console.groupEnd();

console.log(data);

// initialize state

// set event listeners to update state and DOM

for (let i = 0; i < radioButtons.length; i++) {
    const eachButton = radioButtons[i];
console.log(eachButton);

    eachButton.addEventListener('change', (e) => {
console.log('You clicked it!')

/*
const pokemonPicker = Math.floor(Math.random() * 14);

console.log(pokemonPicker);
console.log(data[0]);

let accumulator = 0;

const roundsDisplayed = accumulator + 1;

roundsDisplayed.textContent = roundsDisplayed;

return roundsDisplayed;
*/

    })
    
}


function getRandomPokemon(dataArray) {
    const index = Math.floor(Math.random() * dataArray.length);

    return dataArray[index];
}


for (let i = 0; i < images.length; i++) {
    const eachImage = images[i];
console.log(eachImage);
    

// The page will start out by displaying 3 randomly selected, different Pokemon

let pokemonOne = getRandomPokemon(data);
eachImage.src = pokemonOne.url_image;
console.log ('Image #1' + eachImage.id);

let pokemonTwo = getRandomPokemon(data);
while (pokemonTwo.id === pokemonOne.id) {
    pokemonTwo = getRandomPokemon(data)
}
eachImage.src = pokemonTwo.url_image;
console.log ('Image #2' + eachImage.id);

let pokemonThree = getRandomPokemon(data);
while (pokemonThree.id === pokemonOne.id || pokemonThree.id === pokemonTwo.id) {
    pokemonThree = getRandomPokemon(data)
}
eachImage.src = pokemonThree.url_image;
console.log ('Image #3' + eachImage.id);

    //display the Pokemon on the main page




}

