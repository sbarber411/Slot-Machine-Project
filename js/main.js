
// string emoji's that will be used for the slot machine game
const items = ['🍀', '🌈', '🥇'];

// then you have to define your variables so you can keep track of score, # times played and control the emohis shown
let numbers;
let potOfGold;

// Cache Elements, "numbers" is my object and "attempts/message" are my keys
// these are the elements I will be selecting that will change on my HTML
const numbersEls = {
	attempts: document.querySelector('#a-score'), 
    message: document.querySelector('#message'),
}

// Cache Elements, gotPotsEls is my object and potOfGold1/2/3 are my keys
// These are the elements that will update on my HTML
const goldPotsEls = {
    potOfGold1: document.querySelector('#potOfGold1'),
    potOfGold2: document.querySelector('#potOfGold2'),
    potOfGold3: document.querySelector('#potOfGold3')
}

// this is my random function that will randomly choose 3 items from my array to display on my html
function getRandomItems(){
	const randomItems = [Math.floor(Math.random() * 3)];
	return items[randomItems]
}


// I will use this to select my buttons and allow the buttons to click
const button = document.querySelector('#start');
button.addEventListener('click', playSlot);

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', init);

// function that will allow the game to play and decide what message will show is someone wins/loses
function playSlot(e){
    potOfGold.potOfGold1 = getRandomItems();
    potOfGold.potOfGold2 = getRandomItems();
    potOfGold.potOfGold3 = getRandomItems();


    if ((potOfGold.potOfGold1 === potOfGold.potOfGold2) && (potOfGold.potOfGold3 === potOfGold.potOfGold1) && (potOfGold.potOfGold2 === potOfGold.potOfGold3)) {
        numbers.attempts +=1;
        console.log('WINNER OF ME COINS')
        numbers.message = "You WON Me Coins! 💰"
        
            } else {
                numbers.attempts +=1;
                console.log('TRY AGAIN!')
                numbers.message = "Ahh... try Again!"
    }
    render();
}

//init function should be called when the page loads
// or when we want to reset the game

init(); // this will set the initial when the page loads 
function init (){
    numbers = {
        attempts: 0,
        message: "",
    };

    potOfGold = {
        potOfGold1: '❓',
        potOfGold2: '❓',
        potOfGold3: '❓'
    };

    render();
}

// then you have to create a render function after init function
// this will update the DOM
function render (){ 
    numbersEls.message.innerText = numbers.message
    numbersEls.attempts.innerText = numbers.attempts

    goldPotsEls.potOfGold1.innerText = potOfGold.potOfGold1
    goldPotsEls.potOfGold2.innerText = potOfGold.potOfGold2
    goldPotsEls.potOfGold3.innerText = potOfGold.potOfGold3
}
