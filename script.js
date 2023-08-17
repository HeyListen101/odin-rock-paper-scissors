const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());