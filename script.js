const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
const h3player = document.querySelector('.p1');
const h3comp = document.querySelector('.comp');
const res = document.querySelector('.result');
const overall = document.querySelector('.overall');
const restart = document.querySelector('.restart-page');
const restartBtn = document.querySelector('.rstrtBtn');

restartBtn.addEventListener('click', () => {location.reload()});

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toUpperCase();
    res.style.pointerEvents = 'hover';
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
    game();
}

function game() {
    if (playerScore == 5) {
        overall.innerText = 'You Won the Game!';
        restart.style.display = 'flex';
    } else if (computerScore == 5) {
        overall.innerText = 'You Lost the Game!';
        restart.style.display = 'flex';
    }
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', () => {playRound(btn.innerText,getComputerChoice())}));