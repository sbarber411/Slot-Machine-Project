
// use this to select the values that will change every time they play
const items = ['🍀', '🌈', '🥇'];

const numbersEls = {
	attempts: document.querySelector('#a-score'), 
}

// use this to select all of the boxes
const goldPotsEls = {
    potOfGold1: document.querySelector('#potOfGold1'),
    potOfGold2: document.querySelector('#potOfGold2'),
    potOfGold3: document.querySelector('#potOfGold3')
}

function getRandomItems(){
	const randomItems = [Math.floor(Math.random() * 3)];
	return items[randomItems]
}
const button = document.querySelector('#start');
button.addEventListener('click', playSlot);

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', init);


function playSlot(e){
    potOfGold.potOfGold1 = getRandomItems();
    potOfGold.potOfGold2 = getRandomItems();
    potOfGold.potOfGold3 = getRandomItems();


    if ((potOfGold.potOfGold1 === potOfGold.potOfGold2) && (potOfGold.potOfGold3 === potOfGold.potOfGold1) && (potOfGold.potOfGold2 === potOfGold.potOfGold3)) {
        numbers.attempts +=1;
        console.log('WINNER OF ME COINS')
        
            } else {
                numbers.attempts +=1;
                console.log('TRY AGAIN!')
                
    }
    render();
}

// then you have to define your variables so you can keep track of score, # times played
let numbers;
let potOfGold;
let tryAgain

//init function should be called when the page loads
// or when we want to reset the game

init(); // this will set the initial when the page loads 
function init (){
    numbers = {
        attempts: 0,
        message: "" 
    };

    potOfGold = {
        potOfGold1: '1',
        potOfGold2: '2',
        potOfGold3: '3'
    };

    render();
}

// then you have to create a render function after init function
// this will update the DOM
function render (){ 
    numbersEls.message.innerText = numbers.message
    numbersEls.attempts.innerText = numbers.attempts



    // for ... in loop allows to loop over an object
    // more concise way of writing the function above! So use this!
    // for (let key in numbers){
    //     numbersEls[key].innerText = numbers[key];
    // }
}
