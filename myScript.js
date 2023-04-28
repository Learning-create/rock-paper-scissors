//create variable playerSelection with prompt() case insensitive
prompt("Rock, Paper or Scissors");

//create function getComputerChoice to select rock paper or scissors

function getComputerChoice() {
    let rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt === 1) {
        console.log("Rock");
    } else if (rndInt === 2) {
        console.log("Paper");
    } else if(rndInt === 3) {
        console.log("Scissors");
    }
    return rndInt;
}
let computerChoice = getComputerChoice();

//create function round two parameters playerSelection (case insensitive) and getComputerChoice  winner with a quote
function round(playerSelection, getComputerChoice) {
    if (getComputerChoice === playerSelection) {
        console.log("It's a tie");
    } else if (getComputerChoice === 1 && playerSelection === 3) {
        console.log("Computer Wins");
    } else if (getComputerChoice === 3 && playerSelection === 1) {
        console.log("Player Wins");
    } else if (getComputerChoice > playerSelection) {
        console.log("Computer Wins");
    } else if (getComputerChoice < playerSelection) {
        console.log("Player Wins");
    } else {
        console.log("Huh, something is very wrong");
    }
}

//create function game() loop round 5 times  the winner console.log the results and winner
