const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toUpperCase();
    if (playerChoice == 'ROCK' && computerSelection == 'PAPER' ||
        playerChoice == 'PAPER' && computerSelection == 'SCISSORS' ||
        playerChoice == 'SCISSORS' && computerSelection == 'ROCK') {
        computerScore++;
        return 'You Lose';
    } else if (playerChoice != computerSelection) {
        playerScore++;
        return 'You Win';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let pChoice = prompt('Rock, Paper, or Scissors?');
        console.log(playRound(pChoice, getComputerChoice()));
    }
    if (playerScore > computerScore) {
        alert('You Win!');
    } else if (playerScore < computerScore) {
        alert('You Lose!');
    } else {
        alert("It's a Tie!");
    }
}

console.log(getComputerChoice());