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

function playRound(playerSelection, computerSelection) {
    //determines the winner of one round of RockPaper Scissors with user and computer imputs
    playerSelection = playerSelection.toLowerCase();
    if (!checkInput(playerSelection)) {
        return;
    }

    if (playerSelection == computerSelection) {
        return "Tied!";
    }
    if (playerSelection == "rock") {
        return computerSelection == "scissors"
            ? ++playerScore && "You win! Rock beats scissors."
            : ++computerScore && "You lost to paper :(.";
    } else if (playerSelection == "scissors") {
        return computerSelection == "paper"
            ? ++playerScore && "You win! Scissor cuts paper."
            : ++computerScore && "You lost to rock :(.";
    } else {
        return computerSelection == "rock"
            ? ++playerScore && "You win! Paper beats rock."
            : ++computerScore && "You lost to scissors :(.";
    }
}

let printChoice = function (playerSelection, computerSelection) {
    return (
        "Player chose: " +
        playerSelection +
        ". Computer chose: " +
        computerSelection +
        "."
    );
};

let printScore = function () {
    // prints current score
    return "Score is " + playerScore + " to " + computerScore + ".";
};

let checkInput = function (input) {
    if (input != "rock" && input != "scissors" && input != "paper") {
        alert("Please enter a valid value.");
        return false;
    }
    return true;
};

function game() {
    // plays up to 20 games or first to 5.
    for (let i = 0; i < 20; i++) {
        playerSelection = prompt(
            "What is your choice? Choose from 'rock', 'paper' or 'scissors' verbatim: "
        );
        computerSelection = computerPlay();
        alert(
            playRound(playerSelection, computerSelection) +
            " " +
            printChoice(playerSelection, computerSelection) +
            " " +
            printScore()
        );
        if (playerScore == 5 || computerScore == 5) {
            break;
        }
    }
    alert(playerScore > computerScore ? "You win!" : "You lose!");
    printScore();
}

game();
