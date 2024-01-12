let userScore = 0;
let compScore = 0;
let userWin = true;

const messageShow = document.querySelector(".result");
const userPara = document.querySelector("#userwincount");
const compPara = document.querySelector("#compwincount");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const comChoice = gencompChoice();
        playGame(userChoice, comChoice);

    })
});

const gencompChoice = () => {
    const option = ["stone", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    // console.log(randIndex);
    return option[randIndex];
};

const playGame = (userChoice, comChoice) => {
    console.log("choice was clicked", userChoice);
    console.log(comChoice);
    
    if (userChoice === comChoice) {
        userWin = null;
    }
    else {
        setwinner(userChoice, comChoice);
       
    }
    showWinner(userWin);
};
const setwinner = (userChoice, comChoice) => {
    if (userChoice === "stone") {
        userWin = comChoice === "paper" ? false : true;
    }
    if (userChoice === "paper") {
        userWin = comChoice === "scissor" ? false : true;
    }
    if (userChoice === "scissor") {
        userWin = comChoice === "stone" ? false : true;
    }
};

const showWinner = (userWin) => {
    if (userWin === null) {
        // Draw condition
        messageShow.innerText = "Game Draw!";
        messageShow.style.backgroundColor = "black";
    } else if (userWin) {
        userScore++;
        userPara.innerText = userScore;
        messageShow.innerText = "You Win!";
        messageShow.style.backgroundColor = "green";
    } else {
        compScore++;
        compPara.innerText = compScore;
        messageShow.innerText = "You Lose!";
        messageShow.style.backgroundColor = "red";
    }
};
