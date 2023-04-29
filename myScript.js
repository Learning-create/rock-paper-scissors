
//function playRound two parameters computerChoice and playerSelection 

let computerChoice;
let playerSelection;
let playerScore;
let computerScore;

function playRound (playerSelection, computerChoice) {


    let getPlayerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = getPlayerSelection;

    if (playerSelection !== null){
        playerSelection = playerSelection.toLowerCase();
    } 
    console.log("You choose " + playerSelection);


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
     computerChoice = getComputerChoice();
    console.log("The computer choose " + computerChoice);

    if (playerSelection === computerChoice) {
        console.log("It's a tie! Nobody wins");
    } else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log("You lose. Paper beats Rock");
        return computerScore++;
    } else if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        return playerScore++;
    } else if (playerSelection === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        return playerScore++;
    } else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        return computerScore++;   
    } else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        return computerScore++;
    } else if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        return playerScore++;
    } else {
        console.log("Guess the computer won this one");
        return computerScore++;
    }
}

//create function game() loop round 5 times  the winner console.log the results and winner

function game() {

    //variables for scores
    computerScore = 0;
    playerScore = 0;
    
    for (round = 1; round <= 5; round++) {

        if (round === 1) {
            console.log("This is the first round ");
        } else if (round < 5) {
            console.log("Now round nº " + round);
        } else {
            console.log("Last round");
        }

        playRound(playerSelection, computerChoice);
        console.log("computer: " + computerScore + " You: " + playerScore)
    } 

    if (computerScore < playerScore) {
        console.log("Congratulations, You beat the game");
    } else if (playerScore < computerScore) {
        console.log("Uff, so close, but the computer won this time");
    } else if (playerScore === computerScore) {
        console.log("Wait... A tie?");
    }
}

game();