
const main = document.querySelector("main");
const scoreBox = document.querySelector(".result");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const radios = document.querySelectorAll(".difficultyButton");
const coin = document.querySelector("img");

let difficulty = 1; //default difficulty
let score = 0;//original score


// Difficulty
const difficultyChosen = (event) => {
    difficulty = event.target.value;
}
radios.forEach(radio => {
    //use"change" instead of "click" to avoid running repeatedly
    radio.addEventListener("change", difficultyChosen)
})


//Game start 
const gameStart = () => {
    score = 0;
    scoreBox.innerHTML = score;//reset
    //build a counting down timer
    // Update the count down every 1 second
    let timeNumber = 30;
    let numberId = setInterval(() => {
        //every 1s there will be a new coin
        coinDisplay();
        timeNumber -= 1;
        timer.innerHTML = timeNumber;
        if (timeNumber <= 0) {
            //stop running the function
            clearInterval(numberId);
        }
    }, 1000)//every 1000ms
}

button.addEventListener('click', gameStart);




//coin display
const coinDisplay = () => {
    let coin = document.createElement("img");
    coin.src = "./GoldenCoin.png";
    coin.classList.add("coin");
    coin.classList.add("coin-" + difficulty);
    //get window length,  -50 make sure enough space for coin
    const width = window.innerWidth - 50;
    //get random position for coin to start
    let randomLeft = Math.random() * width;
    coin.style.left = randomLeft + "px"
    //  // add the coin to main
    main.appendChild(coin);

    //when time runs out, stop displaying coins, give 4s for the last one
    setTimeout(() => main.removeChild(coin), 2600);

    coin.addEventListener('click', () => {
        main.removeChild(coin);
        score += 10 * difficulty;
        scoreBox.innerHTML = score;
    })
}






