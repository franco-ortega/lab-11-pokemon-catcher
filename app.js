// import functions and grab DOM elements

import data from './data.js'

const radioButtons = document.querySelectorAll('input')

console.log(radioButtons);
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
    })

}

