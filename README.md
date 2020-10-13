# lab-11-pokemon-catcher

## Create:
1. index.html
    1. home.css
    1. app.js - code for actions and functions
    1. data.js - data array of Pokemon objects
1. results.html
    1. results.css
    1. results.js


## Page displays:
1. 3 random Pokemon
    1. No repeats
        1. Check to make sure each image is different
1. How many Pokemon caught so far (0 -> 9, move to Results page on 10).

## User clicks:
1. Increment # of rounds
1. Increment # of THAT Pokemon
1. Increament # of ALL 3 Pokemon displayed
1. Place 3 MORE (random and different) Pokemon on the page
1. After round #10:
    1. Move user to Results page
        1. Use **window.location**

## Results page:
1. Display Pokemon captured and # of times captured
1. Display ALL Pokemon encounter and # of times encountered
1. Button to 'Play Again'
    1. Moves user to main index.html
    1. Resets # of rounds to 0
    1. Clears tally/array of Pokemon caught
    1. Clears tally/array of Pokemon encountered
