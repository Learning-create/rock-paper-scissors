const choice = document.querySelectorAll("button");
const results = document.getElementById("results");
const showUserScore = document.getElementById("playerScore");
const showCompScore = document.getElementById("computerScore");
const showRound = document.getElementById("round");

let computerChoice;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let clickCount = 0



function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * choice.length);
    if (rndInt === 0) {
        return "rock";
    } else if (rndInt === 1) {
        return "paper";
    } else {
        return "scissors"
    };

};

choice.forEach(choice => choice.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    computerChoice = getComputerChoice();
    playRound();
    round++;

    showRound.textContent = round;
    showCompScore.textContent = computerScore;
    showUserScore.textContent = playerScore;
}));

function playRound () {

    if (playerSelection === "rock" && computerChoice === "paper") {
         results.textContent ="You lose. Paper beats Rock";
         return computerScore++;
     } else if (playerSelection === "rock" && computerChoice === "scissors") {
         results.textContent ="You win! Rock beats Scissors";
         return playerScore++;
     } else if (playerSelection === "paper" && computerChoice === "rock") {
         results.textContent ="You win! Paper beats Rock";
         return playerScore++;
     } else if (playerSelection === "paper" && computerChoice === "scissors") {
         results.textContent ="You lose! Scissors beats Paper";
         return computerScore++;   
     } else if (playerSelection === "scissors" && computerChoice === "rock") {
         results.textContent ="You lose! Rock beats Scissors";
         return computerScore++;
     } else if (playerSelection === "scissors" && computerChoice === "paper") {
         results.textContent ="You win! Scissors beats Paper";
         return playerScore++;
     } else {
         results.textContent ="It's a draw";
     };

};

