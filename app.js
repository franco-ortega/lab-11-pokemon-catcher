import data from './data.js';
import { BAG } from './constants.js';

const roundsPlayed = document.querySelector('.rounds-played')
const radioButtons = document.querySelectorAll('input')
const images = document.querySelectorAll('label > img');

//console.log(roundsPlayed, radioButtons, images);


//const myBag = getFromLocalStorage(BAG) || [];
const pokeResults = [];

//*******FOR LOOP starts here********
for (let i = 0; i < radioButtons.length; i++) {

//*****BUTTON when user CLICKS starts here*****
    radioButtons[i].addEventListener('change', (e) => {

        radioButtons.forEach((radio) => {

            let pokemon = findById(pokeResults, Number(radio.value));
            if (!pokemon) {
                const newPokemon = findById(data, Number(radio.value));
                pokemon = {
                    id: Number(radio.value),
                    name: newPokemon.pokemon,
                    encountered: 1,
                    captured: 0,
                }
                pokeResults.push(pokemon);
            } else {
                pokemon.encountered++;
            }   
        })

        const capturedPokemon = findById(pokeResults, Number(e.target.value));
        capturedPokemon.captured++;

        tallyRounds();

console.log(accumulator);

        if ( accumulator < 10){
            startRound();
        }

        document.getElementById('one').checked = false;
        document.getElementById('two').checked = false;
        document.getElementById('three').checked = false;

console.log(pokeResults);

        setInLocalStorage('BAG', pokeResults);
    });
//*****BUTTON ends here*****
}    
//*******FOR LOOP ends here********


//*****ACCUMULATOR*****
let accumulator = 0;

function tallyRounds() {

    accumulator = accumulator + 1;

    roundsPlayed.textContent = accumulator;

    if (accumulator === 10) {
        roundsPlayed.textContent = accumulator;

        alert('Game Complete. Click OK to see your results.');
        window.location = './results/index.html';
    }
    
    return accumulator
}
//*****ACCUMULATOR ends here*****


//*****GET RANDOM POKEMON function*****
function getRandomPokemon(dataArray) {
    const index = Math.floor(Math.random() * dataArray.length);

    return dataArray[index];
}

// The page will start out by displaying 3 randomly selected, different Pokemon
//*****START ROUND function*****
let allPokemonArray = [];

export function startRound() {

//console.log('Encountered previously: ' + allPokemonArray);

    let pokemonOne = getRandomPokemon(data);
    let pokemonTwo = getRandomPokemon(data);
    let pokemonThree = getRandomPokemon(data);

    while (pokemonTwo.id === pokemonOne.id) {
        pokemonTwo = getRandomPokemon(data)
    }

    while (pokemonThree.id === pokemonOne.id || pokemonThree.id === pokemonTwo.id) {
        pokemonThree = getRandomPokemon(data)
    }

    radioButtons[0].value = pokemonOne.id
    images[0].src = pokemonOne.url_image;

    radioButtons[1].value = pokemonTwo.id
    images[1].src = pokemonTwo.url_image;

    radioButtons[2].value = pokemonThree.id
    images[2].src = pokemonThree.url_image;


///////////GET LOCAL STORAGE CALL********************************
/*
const pokeBag = getFromLocalStorage(BAG) || [];

const itemSeenOne = findById(pokeBag, pokemonOne.id);

if (itemSeenOne === undefined) {
    const newItemSeenOne = {
        id: pokemonOne.id,
        encountered: 1
    };
    pokeBag.push(newItemSeenOne);
} else {
    itemSeenOne.encountered++;
}

const itemSeenTwo = findById(pokeBag, pokemonTwo.id);

if (itemSeenTwo === undefined) {
    const newItemSeenTwo = {
        id: pokemonTwo.id,
        encountered: 1
    };
    pokeBag.push(newItemSeenTwo);
} else {
    itemSeenTwo.encountered++;
}

const itemSeenThree = findById(pokeBag, pokemonThree.id);

if (itemSeenThree === undefined) {
    const newItemSeenThree = {
        id: pokemonThree.id,
        encountered: 1
    };
    pokeBag.push(newItemSeenThree);
} else {
    itemSeenThree.encountered++;
}


///////////SET LOCAL STORAGE CALL********************************

setInLocalStorage('BAG', pokeBag);
*/



    return allPokemonArray;
}
//*****END startRound() function*****


//setFromLocalStorage FUNCTION STARTS HERE******
function setInLocalStorage(key, value) {
    const stringyKey = JSON.stringify(value);
    localStorage.setItem(key, stringyKey);

return stringyKey;
}
//setFromLocalStorage FUNCTION ENDS HERE******

//getFromLocalStorage FUNCTION STARTS HERE******
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}
//getFromLocalStorage FUNCTION ENDS HERE******


//*****findByID*****

function findById(diceArray, diceId) {
    for (let i = 0; i < diceArray.length; i++) {
        const myDice = diceArray[i];

        if (myDice.id === diceId) {
            return myDice;
        } 
    }
}
//console.log(findById(data, myPick.id));


startRound();





/////MISC STUFF BELOW

//capturedPokemon(myPokemonArray, userPick);
// or myPokemonArray.push(userPick);


//    allPokemonArray.push(pokemonOne.id, pokemonTwo.id, pokemonThree.id)

//console.log(allPokemonArray);
//console.log('Encountered array: ' + allPokemonArray);


//*****CAPTURED POKEMON function*****
/*
export let myPokemonArray = [];
console.log(myPokemonArray);

function capturedPokemon(array, pokemon) {
    array.push(pokemon);
    return array;
}
*/


//        const userPick = e.target.value;
//        console.log('You clicked it!: ' + userPick)

///////////GET LOCAL STORAGE CALL********************************
/*
    const itemInBag = findById(myBag, userPick);

    if (itemInBag === undefined) {
        const newItemInBag = {
            id: userPick,
            captured: 1
        };
        myBag.push(newItemInBag);
    } else {
        itemInBag.captured++;
    }
*/
//    capturedPokemon(myPokemonArray, userPick);
// or myPokemonArray.push(userPick);

///////////SET LOCAL STORAGE CALL********************************


/*
//*****ENCOUNTERED POKEMON function*****
function allPokemon(array, option1, option2, option3) {
    array.push(option1, option2, option3);
    return array;
}
*/


//for (let i = 0; i < images.length; i++) {
//    const eachImage = images[i];
//console.log(eachImage);
    

//*****findByID*****
/*
function findById(diceArray, diceId) {
    for (let i = 0; i < diceArray.length; i++) {
        const myDice = diceArray[i];

        if (myDice.id === diceId) {
            return myDice;
        } 
    }
}
console.log(findById(data, myPick.id));
*/
