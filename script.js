const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
const h3player = document.querySelector('.p1');
const h3comp = document.querySelector('.comp');
const res = document.querySelector('.result');

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toUpperCase();
    if (playerChoice == 'ROCK' && computerSelection == 'PAPER' ||
        playerChoice == 'PAPER' && computerSelection == 'SCISSORS' ||
        playerChoice == 'SCISSORS' && computerSelection == 'ROCK') {
        computerScore++;
        h3comp.innerText = h3comp.innerText.slice(0, 16) + ' ' + computerScore;
        res.innerText = 'You Lose!';
    } else if (playerChoice != computerSelection) {
        playerScore++;
        h3player.innerText = h3player.innerText.slice(0, 12) + ' ' + playerScore;
        res.innerText = 'You Win!';
    } else {
        res.innerText = "It's a Tie!";
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

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', () => {playRound(btn.innerText,getComputerChoice())}));