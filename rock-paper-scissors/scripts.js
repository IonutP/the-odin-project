let computerWin = 0;
let playerWin = 0;
let gameCount = 0;

let playerSelection;
let computerSelection;

function getUserChoice() {
    let choice = window.prompt("What's your choice?").toLowerCase();
    console.log('Player chooses ' + choice);
    return choice;
}

function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();
    console.log('Computer has chosen ' + randomChoice);
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    gameCount++;
    console.log('Game #' + gameCount + '!');
    return compareChoices(getUserChoice(), getComputerChoice());
}

function compareChoices(compareChoice, compareToChoice){
    let message = '';

    if (compareChoice == compareToChoice) {
        message = 'It\'s a tie! Score: ' + playerWin + ' - ' + computerWin;
    } else if (
        (compareChoice == 'rock' && compareToChoice == 'paper') ||
        (compareChoice == 'paper' && compareToChoice == 'scissors') ||
        (compareChoice == 'scissors' && compareToChoice == 'rock')
    ) {
        computerWin++;
        message = 'Computer won! Score: ' + playerWin + ' - ' + computerWin;
    } else if (
        (compareChoice == 'rock' && compareToChoice == 'scissors') ||
        (compareChoice == 'paper' && compareToChoice == 'rock') ||
        (compareChoice == 'scissors' && compareToChoice == 'paper')
    ) {
        playerWin++;
        message = 'You win! Score: ' + playerWin + ' - ' + computerWin;
    }
    return message;
}

function game(){
    for (i = 1; i <= 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWin == computerWin) {
        console.log('It\'s a tie! Score was ' + playerWin + ' - ' + computerWin);
    } else if (playerWin > computerWin) {
        console.log('You are the winner! Score was ' + playerWin + ' - ' + computerWin)
    } else if (computerWin > playerWin) {
        console.log('Computer is the winner! Score was ' + playerWin + ' - ' + computerWin);
    }
}
game();