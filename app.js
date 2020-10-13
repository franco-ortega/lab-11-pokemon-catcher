import data from './data.js'

const roundsPlayed = document.querySelector('.rounds-played')
const radioButtons = document.querySelectorAll('input')
const images = document.querySelectorAll('label > img');

console.log(roundsPlayed, radioButtons, images);

startRound();

//*******FOR LOOP starts here********
for (let i = 0; i < radioButtons.length; i++) {
    const eachButton = radioButtons[i];
//console.log(eachButton);




//*****BUTTON starts here*****
    eachButton.addEventListener('change', (e) => {
console.log('You clicked it!')

    const userPick = e.target.value;
console.log(userPick)


    tallyRounds();
    capturedPokemon(myPokemonArray, userPick); // or         myPokemonArray.push(userPick);


    startRound();

console.log(myPokemonArray);

    });
//*****BUTTON ends here*****

}    
//*******FOR LOOP ends here********



//*****ACCUMULATOR*****
let accumulator = 0;

function tallyRounds() {

    accumulator = accumulator + 1;
console.log(accumulator)

    roundsPlayed.textContent = accumulator;

    if (accumulator === 10) {
        alert('Game Complete. Click OK to see results.');
        window.location = './results/index.html';
    }
    
    return accumulator
}



//*****CAPTURED POKEMON function*****
let myPokemonArray = [];
console.log(myPokemonArray);

function capturedPokemon(array, pokemon) {
    array.push(pokemon);
    return array;
}


//*****ENCOUNTERED POKEMON function*****
function allPokemon(array, option1, option2, option3) {
    array.push(option1, option2, option3);
    return array;
}


//*****GET RANDOM POKEMON function*****
function getRandomPokemon(dataArray) {
    const index = Math.floor(Math.random() * dataArray.length);

    return dataArray[index];
}


// The page will start out by displaying 3 randomly selected, different Pokemon
//*****START ROUND function*****
function startRound() {

    let allPokemonArray = [];

console.log(allPokemonArray);


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


let newPokemonArray = allPokemonArray.push(pokemonOne.id, pokemonTwo.id, pokemonThree.id)

console.log(allPokemonArray);
console.log(newPokemonArray);

return newPokemonArray;

}






/////NEW STUFF BELOW

//document.getElementById('one').checked = false;
//document.getElementById('two').checked = false;
//document.getElementById('three').checked = false;

//console.log ('Image #' + pokemonOne.id);
//console.log ('Image #' + pokemonTwo.id);
//console.log ('Image #' + pokemonThree.id);


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
