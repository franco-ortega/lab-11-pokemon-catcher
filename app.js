import data from './data.js'

const roundsPlayed = document.querySelector('.rounds-played')
const radioButtons = document.querySelectorAll('input')
const images = document.querySelectorAll('label > img');
//const pokemonCaught = 0;
//const pokemonEncountered = 0;

console.log(roundsPlayed, radioButtons, images);



for (let i = 0; i < radioButtons.length; i++) {
    const eachButton = radioButtons[i];
//console.log(eachButton);

startRound();


//*****BUTTON starts here*****
    eachButton.addEventListener('change', (e) => {
console.log('You clicked it!')

    tallyRounds();

    startRound();


    });


}    

let accumulator = 0;


function tallyRounds() {

startRound();

console.log(accumulator)
    let rounds = accumulator + 1;
console.log(rounds)

    roundsPlayed.textContent = rounds;

}


//*****BUTTON ends here*****



function getRandomPokemon(dataArray) {
    const index = Math.floor(Math.random() * dataArray.length);

    return dataArray[index];
}


// The page will start out by displaying 3 randomly selected, different Pokemon

function startRound() {

let pokemonOne = getRandomPokemon(data);
let pokemonTwo = getRandomPokemon(data);
let pokemonThree = getRandomPokemon(data);

while (pokemonTwo.id === pokemonOne.id) {
    pokemonTwo = getRandomPokemon(data)
}

while (pokemonThree.id === pokemonOne.id || pokemonThree.id === pokemonTwo.id) {
    pokemonThree = getRandomPokemon(data)
}
//console.log ('Image #' + pokemonOne.id);
//console.log ('Image #' + pokemonTwo.id);
//console.log ('Image #' + pokemonThree.id);

radioButtons[0].value = pokemonOne.id
images[0].src = pokemonOne.url_image;

radioButtons[1].value = pokemonTwo.id
images[1].src = pokemonTwo.url_image;

radioButtons[2].value = pokemonThree.id
images[2].src = pokemonThree.url_image;

//document.getElementById('one').checked = false;
//document.getElementById('two').checked = false;
//document.getElementById('three').checked = false;
}



/////NEW STUFF BELOW
let capturedPokemon = [];




console.log(capturedPokemon);


/*
console.log(radioButtons[0]);
console.log(radioButtons[1]);
console.log(radioButtons[2]);

console.log(images[0]);
console.log(images[1]);
console.log(images[2]);
*/





/*
console.group('Radio Buttons')
    console.info(radioButtons[0]);
    console.info(radioButtons[1]); 
    console.info(radioButtons[2]);
console.groupEnd();
*/


//image.src = pokemonOne.url_image;
//console.log ('Image #1' + eachImage.id);
//console.log ('Image #' + pokemonOne.id);


    //display the Pokemon on the main page




//}




/*
const pokemonPicker = Math.floor(Math.random() * 14);

console.log(pokemonPicker);
console.log(data[0]);

let accumulator = 0;

const roundsDisplayed = accumulator + 1;

roundsDisplayed.textContent = roundsDisplayed;

return roundsDisplayed;
*/



//for (let i = 0; i < images.length; i++) {
//    const eachImage = images[i];
//console.log(eachImage);
    

