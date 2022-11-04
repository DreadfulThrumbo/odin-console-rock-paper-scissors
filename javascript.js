let option;
let computerChoice;
let playerChoice;

game();

function computerSelection() {
    let computerNumber = Math.floor(Math.random() * 3);

    if (computerNumber === 0) {
        computerChoice = "Rock";

        return computerChoice;
    } else if (computerNumber === 1) {
        computerChoice = "Paper";
        
        return computerChoice;
    } else {
        computerChoice = "Scissors";
        
        return computerChoice;
    }
}

function playerSelection() {
    option = prompt("Choose Rock, Paper, or Scissors!")

    if (option.toLowerCase() === "rock") {
        playerChoice = "Rock";
        
        return playerChoice;
    } else if (option.toLowerCase() === "paper") {
        playerChoice = "Paper";
        
        return playerChoice;
    } else if (option.toLowerCase() === "scissors") {
        playerChoice = "Scissors";
        
        return playerChoice;
    } else {
        alert("Invalid Choice!")
        playerSelection();
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Rock") {
        alert("It's a tie! Rock and Rock.");
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        alert("You lose! Paper beats Rock.");
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        alert("You win! Rock beats Scissors.");
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        alert("You win! Paper beats Rock.");
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        alert("It's a tie! Paper and Paper.");
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        alert("You lose! Scissors beat Paper.");
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        alert("You lose! Rock beats Scissors.");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        alert("You win! Scissors beat Paper.");
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        alert("It's a tie! Scissors and Scissors");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice);
        
        computerChoice = computerSelection();
        playerChoice = playerSelection();
    }
}

