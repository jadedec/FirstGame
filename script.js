
const main = document.querySelector("main");
const scoreBox = document.querySelector(".result");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");
const radios = document.querySelectorAll(".difficultyButton");
const coin = document.querySelector("i.coin");

let difficulty = 1; //default difficulty
let score = 0;//original score
let isGameStart = false;


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
    if (!isGameStart) {
        //avoid clicking start again during the game in process
        isGameStart = true;
        score = 0;
        scoreBox.innerHTML = score;//reset
        //build a counting down timer
        // Update the count down every 1 second
        let timeNumber = 30;
        let numberId = setInterval(() => {
            coinDisplay();
            timeNumber -= 1;
            timer.innerHTML = timeNumber;
            if (timeNumber <= 0) {
                //stop running the function
                clearInterval(numberId);
                isGameStart = false;
            }
        }, 1000)//every 1000ms
    }
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

    switch (difficulty) {
        case "1":
            setTimeout(() => main.removeChild(coin), 4000);
            break;
        case "2":
            setTimeout(() => main.removeChild(coin), 3000);
            break;
        case "3":
            setTimeout(() => main.removeChild(coin), 2000);
            break;
        default:
            break;
    }

    coin.addEventListener('click', () => {
        main.removeChild(coin);
        score += 10 * difficulty;
        scoreBox.innerHTML = score;
    })
}






