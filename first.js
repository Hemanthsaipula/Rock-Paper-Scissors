let userscore = 0;
let computerscore = 0;
let userNum = 0;
let msgbox = document.querySelector(".msgbox");
let rndmidx;
let userChoice;
let array;
let userCount = document.querySelector("#userscore");
let computerCount = document.querySelector("#computerscore");

const choices = document.querySelectorAll(".choice");

const generateChoice = () => {
    array = ["rock", "paper", "scissors"];
    rndmidx = Math.floor(Math.random() * 3);
    console.log("Computer Choice is", array[rndmidx]);
}

const playGame = () => {
    if (userNum === rndmidx) {
        msgbox.innerText = "It's a Draw";
    } else if (userChoice === "rock" && array[rndmidx] === "scissors") {
        msgbox.innerText = "You Won!!";
    } else if (userChoice === "scissors" && array[rndmidx] === "rock") {
        msgbox.innerText = "You Lost!! Computer Won";
    } else if (userChoice === "scissors" && array[rndmidx] === "paper") {
        msgbox.innerText = "You Won!!";
    } else if (userChoice === "paper" && array[rndmidx] === "scissors") {
        msgbox.innerText = "You Lost!! Computer Won";
    } else if (userChoice === "paper" && array[rndmidx] === "rock") {
        msgbox.innerText = "You Won!!";
    } else if (userChoice === "rock" && array[rndmidx] === "paper") {
        msgbox.innerText = "You Lost!! Computer Won";
    }
}

const addOn = () => {
    if (msgbox.innerText === "You Won!!") {
        userscore++;
        userCount.innerText = userscore;
        msgbox.style.backgroundColor = "green"; 
    } else if (msgbox.innerText === "You Lost!! Computer Won") {
        computerscore++;
        computerCount.innerText = computerscore;
        msgbox.style.backgroundColor = "red";
    }else if(msgbox.innerText === "It's a Draw"){
        msgbox.style.backgroundColor = "rgb(69, 69, 175)";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        if (userChoice === "rock") {
            userNum = 0;
        } else if (userChoice === "paper") {
            userNum = 1;
        } else if (userChoice === "scissors") {
            userNum = 2;
        }
        generateChoice();
        playGame();
        addOn();
        console.log("User Choice is", userChoice);
    });
});
