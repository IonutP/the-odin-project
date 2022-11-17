let computerWin = 0;
let playerWin = 0;
let gameCount = 0;

let playerSelection;
let computerSelection;

let summary = document.getElementById('summary');

function getUserChoice() {
    let choice = window.prompt("What's your choice?").toLowerCase();
    summary.innerHTML += 'Player chooses ' + choice + '. ';
    return choice;
}

function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();
    summary.innerHTML += 'Computer has chosen ' + randomChoice + '. ';
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    gameCount++;
    return compareChoices(getUserChoice(), getComputerChoice());
}

function compareChoices(compareChoice, compareToChoice){
    let message = '';

    if (compareChoice == compareToChoice) {
        message = `It\'s a tie! Score: ${playerWin} - ${computerWin}`;
    } else if (
        (compareChoice == 'rock' && compareToChoice == 'paper') ||
        (compareChoice == 'paper' && compareToChoice == 'scissors') ||
        (compareChoice == 'scissors' && compareToChoice == 'rock')
    ) {
        computerWin++;
        message = `Computer won! Score: ${playerWin} - ${computerWin}`;
    } else if (
        (compareChoice == 'rock' && compareToChoice == 'scissors') ||
        (compareChoice == 'paper' && compareToChoice == 'rock') ||
        (compareChoice == 'scissors' && compareToChoice == 'paper')
    ) {
        playerWin++;
        message = `You win! Score: ${playerWin} - ${computerWin}`;
    }
    return message;
}

function game(){
    for (i = 1; i <= 5; i++) {
        addSummary('Game #' + i + '!');
        // playRound(playerSelection, computerSelection);
        addSummary(playRound(playerSelection, computerSelection) + ' <br />');
    }
    if (playerWin == computerWin) {
        addSummary(`It's a tie! Score was ${playerWin} - ${computerWin}.`);
    } else if (playerWin > computerWin) {
        addSummary(`You are the winner! Score was ${playerWin} - ${computerWin}.`);
    } else if (computerWin > playerWin) {
        addSummary(`Computer is the winner! Score was ${playerWin} - ${computerWin}.`);
    }
}

function addSummary(message){
    summary.innerHTML += message + '<br />';
}
game();