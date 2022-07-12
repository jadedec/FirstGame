
const main = document.querySelector("main");
const scoreBox = document.querySelector(".result");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const coin = document.querySelector(".coin");

let isStart = false;
let difficulty = 1; //default difficulty
let score = 0;//original score



//Game start 
const gameStart = () => {
    if (!isStart) {
        isStart = true;
        score = 0;
        coin.classList.add("coin-" + difficulty);
        //build a counting down timer
        // Update the count down every 1 second
        let timeNumber = 30;
        let numberId = setInterval(() => {
            timeNumber -= 1;
            timer.innerHTML = timeNumber;
            if (timeNumber <= 0) {
                //stop running the function
                clearInterval(numberId);
                clear();
            }
        }, 1000)
    }
}
button.addEventListener('click', gameStart);


// Difficulty
let radios = document.querySelectorAll(".difficultyButton");
const difficultyChosen = (event) => {
    difficulty = event.target.value;
}
radios.forEach(radio => {
    //use"change" instead of "click" to avoid running repeatly
    radio.addEventListener("change", difficultyChosen)
})


const clear = () => {
    isStart = false;
    difficulty = 1;
    score = 0;
    coin.classList.remove("coin-" + difficulty);
}

//when clicked, remove the icon , means caught
coin.addEventListener('click', () => {
    score += 10 * difficulty;
    scoreBox.innerHTML = score;
})




