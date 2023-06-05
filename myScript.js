const choice = document.querySelectorAll("button");
const results = document.getElementById("results");
const showUserScore = document.getElementById("playerScore");
const showCompScore = document.getElementById("computerScore");
const showRound = document.getElementById("round");

let computerChoice = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;

function disableBtn() {
    choice.forEach(elem => {
        elem.disable = true;
    })
}

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

    if ((playerSelection === "rock" && computerChoice === "paper") || 
    (playerSelection === "paper" && computerChoice === "scissors") || 
    (playerSelection === "scissors" && computerChoice === "rock")) {
         results.textContent ="You lose. "+ computerChoice + " beats " + playerSelection;
         computerScore++;

        if (computerScore === 5) {
            results += "<br><br>Computer won";
            disableBtn();
        }

     } else if (playerSelection === computerChoice) {
         results.textContent ="It's a draw";
     } else {
        results.textContent ="You win. "+ playerSelection + " beats " + computerChoice;
        playerScore++;

       if (playerScore === 5) {
        results += "<br><br>You won"
           disableBtn();
       }
     };
     return
};

