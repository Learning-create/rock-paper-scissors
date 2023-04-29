
//create variable playerSelection with prompt() case insensitive
let playerSelection = prompt("Rock, Paper or Scissors?");

playerSelection = playerSelection.toLowerCase();

console.log(playerSelection);



//create function getComputerChoice to select rock paper or scissors

function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt === 1) {
        let choice = "rock";
        return choice;
    } else if (rndInt === 2) {
        let choice = "paper";
        return choice;
    } else if(rndInt === 3) {
        let choice = "scissors";
        return choice;
    }
    return rndInt;
}
let computerChoice = getComputerChoice();
console.log(computerChoice);

//function playRound two parameters computerChoice and playerSelection 

function playRound (playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        console.log("It's a tie! Nobody wins");
    } else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log("You lose. Paper beats Rock");
    } else if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
    } else if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
    } else {
        console.log("Ups! Something went wrong");
    }
}


playRound(playerSelection, computerChoice);
/*
//create function round two parameters playerSelection and getComputerChoice  winner with a quote
function round(playerSelection, computerChoice) {
   console.log(computerChoice);
   console.log(playerSelection);
}
console.log(round())
//create function game() loop round 5 times  the winner console.log the results and winner
*/