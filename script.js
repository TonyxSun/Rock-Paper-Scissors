let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

function computerPlay() {
    //computer makes a random choice between R/P/S
    let options = ["rock", "paper", "scissors"];
    const selector = Math.floor(Math.random() * 3);
    return options[selector];
}

function playRound(e) {
    //determines the winner of one round of RockPaper Scissors with user and computer imputs
    playerSelection = this.id;
    computerSelection = computerPlay();

    if (playerSelection == "rock") {
        printRound(computerSelection == "scissors"
            ? ++playerScore && "You win! Rock beats scissors."
            : (computerSelection == "paper") ? ++computerScore && "You lost to paper :(." : "Tied!");
    } else if (playerSelection == "scissors") {
        printRound(computerSelection == "paper"
            ? ++playerScore && "You win! Scissor cuts paper."
            : (computerSelection == "rock") ? ++computerScore && "You lost to rock :(." : "Tied!");
    } else if (playerSelection == "paper"){
        printRound(computerSelection == "rock"
            ? ++playerScore && "You win! Paper beats rock."
            : (computerSelection == "scissors") ? ++computerScore && "You lost to scissors :(." : "Tied!");
    }
}

let printRound = function (msg) {
    // prints results of current round 
    roundResults.innerHTML = `Player chose: ${playerSelection}. Computer chose: ${computerSelection}.\n <strong>${msg}</strong>`;
    resultsDiv.insertBefore(roundResults, scoresDiv);
    playerResults.textContent = `Player: ${playerScore}`;
    computerResults.textContent = `Computer: ${computerScore}`
    if (playerScore == 5 || computerScore == 5) {
        printWinner();
        return;
    }
};

let printWinner = function () {
    // prints winner
    let msg;
    if (playerScore > computerScore){
        msg = "You won! You have defeated your opponent!!!\n";
    } else {
        msg = "Sorry, you lost. Better luck next time!\n";
    }
    endMsg.innerHTML = msg;
};

function restart(){
    playerScore = 0;
    computerScore = 0;
    roundResults.innerHTML = '';
    playerResults.textContent = `Player: ${playerScore}`;
    computerResults.textContent = `Computer: ${computerScore}`
    endMsg.textContent = '';
}

const resultsDiv = document.querySelector('.results');
const scoresDiv = document.querySelector('#scores');
const roundResults = document.querySelector('#round-results');
const playerResults = document.querySelector('#player-score');
const computerResults = document.querySelector('#computer-score');
const endDiv = document.querySelector('#game-end');
const endMsg = document.querySelector('#end-msg');
const btns = document.querySelectorAll('.game-option');
const retryBtn = document.querySelector('#retry-btn');
btns.forEach(btn => btn.addEventListener('click', playRound));
retryBtn.addEventListener('click', restart);

