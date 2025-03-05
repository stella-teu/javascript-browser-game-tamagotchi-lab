/*-------------------------------- Calls --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};
let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/
const boredomStatElemment = document.querySelector('#boredom-stat');
const hungerStatElement = document.querySelector('#hunger-stat');
const sleepinessStatElement = document.querySelector('#sleepiness-stat');

const playButtonElement = document.querySelector('#play');
const feedButtonElement = document.querySelector('#feed');
const sleepButtonElement = document.querySelector('#sleep');
const wrapperButtonElement = document.querySelector('.button-wrapper');

const gameMessageElement = document.querySelector('#message');

const resetButtonElement = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/
function init(){
    resetButtonElement.classList.add('hidden');
    gameMessageElement.classList.add('hidden');
    timer = setInterval(runGame(), 2000); //2000 is 2 seconds
};
init();
console.log(init());
gameOver = false;

function runGame(){
    updateStates();
    checkGameOver();
    render();
};

function render(){
    boredomStatElemment.textContent = state.boredom;
    hungerStatElement.textContent = state.hunger;
    sleepinessStatElement.textContent = state.sleepiness;
    if (gameOver === true){
        clearInterval(timer);
        resetButtonElement.classList.remove("hidden");
        gameMessageElement.classList.remove("hidden");
    }
};

function updateStates(){
    state.boredom = getRandomNum(0,15);
    state.hunger = getRandomNum(0,15);
    state.sleepiness = getRandomNum(0,15);
};
function getRandomNum(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

function checkGameOver(){
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10){
        gameOver = true;
    }
};

function handlerButtonClick(event){
    if (event.target.id === 'play'){
        state.boredom = 0; 
        render();
    } else if (event.target.id === 'feed'){
        state.hunger = 0;
        render();
    } else if (event.target.id === 'sleep'){
        state.sleepiness = 0;
        render();
    }
};
wrapperButtonElement.addEventListener('click', handlerButtonClick);

resetButtonElement.addEventListener('click', init);

/*----------------------------- Event Listeners -----------------------------*/


// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
