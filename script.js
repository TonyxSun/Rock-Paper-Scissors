let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let roundNumber = 0;
let introFinished = false;
const introClick = document.querySelector('#click-continue');
const gameInterface = document.querySelector('#game-container');
const resultsDiv = document.querySelector('.results');
const scoresDiv = document.querySelector('#scores');
const roundResults = document.querySelector('#round-results');
const playerResults = document.querySelector('#player-score');
const computerResults = document.querySelector('#computer-score');
const endDiv = document.querySelector('#end-container');
const endMsg = document.querySelector('#end-msg');
const btns = document.querySelectorAll('.game-option');
const retryBtn = document.querySelector('#retry-btn');

let i = 0;
let text = `Your system has been taken over by EvilBot 3.14. 
        The only way to salvage your files and defeat the evil AI 
        is to play a game even the mastermind hasn't yet figured out...`;

function intro() {
    // intro with "typing" effect
    if (i < text.length) {
        document.getElementById('intro').innerHTML += text.charAt(i);
        i++;
        if (i == text.length) {
            setTimeout(intro, 1000);
        } else {
            setTimeout(intro, 50);
        }
    } else {
        introFinished = true;
        introClick.classList.toggle('hidden');
    }
}

function startgame() {
    // loads the game interface
    if (introFinished == true) {
        introClick.classList.toggle('hidden');
        gameInterface.classList.toggle('hidden');
        window.removeEventListener('click', startgame);
        window.removeEventListener('touchend', startgame);

    }
}

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
    roundNumber++;
    if (playerSelection == "rock") {
        printRound(computerSelection == "scissors"
            ? ++playerScore && "You win! Rock beats scissors."
            : (computerSelection == "paper") ? ++computerScore && "You lost to paper." : "Tied!");
    } else if (playerSelection == "scissors") {
        printRound(computerSelection == "paper"
            ? ++playerScore && "You win! Scissor beats paper."
            : (computerSelection == "rock") ? ++computerScore && "You lost to rock." : "Tied!");
    } else if (playerSelection == "paper") {
        printRound(computerSelection == "rock"
            ? ++playerScore && "You win! Paper beats rock."
            : (computerSelection == "scissors") ? ++computerScore && "You lost to scissors." : "Tied!");
    }
}

let printRound = function (msg) {
    // prints results of current round and updates scores
    roundResults.innerHTML = `Round ${roundNumber}: You chose: ${playerSelection}. EvilBot chose: ${computerSelection}.<br> <strong>${msg}</strong>`;
    resultsDiv.insertBefore(roundResults, scoresDiv);
    playerResults.textContent = `Player: ${playerScore}`;
    computerResults.textContent = `EvilBot: ${computerScore}`
    if (playerScore == 5 || computerScore == 5) {
        printWinner();
        return;
    }
};

let printWinner = function () {
    // prints winner
    let msg;
    if (playerScore > computerScore) {
        msg = "You won! You have defeated EvilBot 3.14 and it left you alone - HOORAY!!!\n";
    } else {
        msg = "Sorry, you lost. You will find your hard drive filled with pictures of pies when you wake up tomorrow. Condolences.\n";
    }
    endMsg.innerHTML = msg;
    gameInterface.classList.toggle('hidden');
    endDiv.classList.toggle('hidden');
};


function restart() {
    // Resets game
    playerScore = 0;
    computerScore = 0;
    introFinished = false;
    roundResults.innerHTML = '';
    playerResults.textContent = `Player: ${playerScore}`;
    computerResults.textContent = `Computer: ${computerScore}`
    endMsg.textContent = '';
    gameInterface.classList.toggle('hidden');
    endDiv.classList.toggle('hidden');
}

intro()
window.addEventListener('click touchend', startgame);
// window.addEventListener('touchend', startgame);
btns.forEach(btn => btn.addEventListener('click', playRound));
retryBtn.addEventListener('click', restart);

