
const main = document.querySelector("main");
const scoreBox = document.querySelector(".result");
const button = document.querySelector(".button");
const timer = document.querySelector(".timer");

let isStart = false;
let difficulty = 1; //default difficulty
let score = 0;//original score



//Game start 
const gameStart = () => {
    if (!isStart) {
        isStart = true;
        score = 0;
        //build a counting down timer
        // Update the count down every 1 second
        let timeNumber = 30;
        let numberId = setInterval(() => {
            timeNumber -= 1;
            timer.innerHTML = timeNumber;
            if (timeNumber <= 0) {
                //stop running the function
                clearInterval(numberId);
                isStart = false;
                alert('Game Over');
            }
        }, 1000)
    }
}
button.addEventListener('click', gameStart);


// Difficulty
let radios = document.querySelectorAll(".difficultyButton");
radios.forEach(radio => {
    //use"change" instead of "click" to avoid running repeatly
    radio.addEventListener("change", () => {
        difficulty = radio.value;
    })
})



//add coin to the game, 
const addElement = () => {
    //add a new img element
    let icon = document.createElement("img");
    icon.src = "./Golden Coin.jpeg";
    //set coin type based on difficulty
    icon.classList.add('coin' + difficulty);
    //give it a random start position
    icon.style.left = Math.random() * 730 + 'px'
    main.appendChild(icon);


    //when clicked, remove the icon , means caught
    icon.addEventListener('click', () => {
        main.removeChild(icon);
        score += 10 * difficulty;
        scoreBox.innerHTML = score;
    })
}






