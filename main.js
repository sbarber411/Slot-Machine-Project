// The emojis I will use for the slot machine
// const items = ['🍀', '🌈', '🥇'];

// Rules for the game
const luckRulesLookUp = { 
    fourLeafClover: {
        image: '🍀',
        triple: 'wins'
    },
    rainbow: {
        image: '🌈',
        triple: 'wins'
    },
    gold: {
        image: '🥇',
        triple: 'wins'
    }
}

// use this to select the values that will change every time they play
const numbersEls = {
	attempts: document.querySelector('#a-score'), 
}

// use this to select all of the boxes
const goldPotsEls = {
    pot1: document.querySelector('#potOfGold1'),
    pot2: document.querySelector('#potOfGold2'),
    pot3: document.querySelector('#potOfGold3')
}

    function getRandomItems(){
    const items = ['🍀', '🌈', '🥇'];
	const randomItems = [Math.floor(Math.random() * 3)];
	return items[randomItems]
}
const button = document.querySelector('#start');
button.addEventListener('click', playSlot);

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', init);

function playSlot(e){
    console.log('button is working');
    potOfGold1.innerText = getRandomItems();
    potOfGold2.innerText = getRandomItems();
    potOfGold3.innerText = getRandomItems();

    if (goldPots.potOfGold1 === goldPots.potOfGold2 && goldPots.potOfGold3 === goldPots.potOfGold1) {
            result = "Winner of Me Coins"
            numbers.attempts +=1;
            console.log('WINNER OF ME COINS')
    } else {
        numbers.attempts +=1;
        result = 'TRY AGAIN!'
        console.log('TRY AGAIN!')
    }

 render();
}


// then you have to define your variables so you can keep track of score, # times played
let numbers;
let goldPots;
let tryAgain;

//init function should be called when the page loads
// or when we want to reset the game

init(); // this will set the initial when the page loads 
function init (){
    numbers = {
        attempts: 0,
    };

    goldPots = {
        potOfGold1: '?',
        potOfGold2: '?',
        potOfGold3: '?'
    };

    tryAgain = {
        attempts: 0,
    };
    
}

// then you have to create a render function after init function
// this will update the DOM
function render (){ 
    potOfGold1.innerText = getRandomItems();
    potOfGold2.innerText = getRandomItems();
    potOfGold3.innerText = getRandomItems();

    numbersEls.attempts.innerText = numbers.attempts;  
    
 

    // for ... in loop allows to loop over an object
    // more concise way of writing the function above! So use this!
    // for (let key in numbers){
    //     numbersEls[key].innerText = numbers[key];
    // }
}


//   create DOM
// random function 
//   win function
// reset function