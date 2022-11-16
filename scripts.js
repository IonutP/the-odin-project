function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionToLower = playerSelection.toLowerCase();
    let computerSelectionToLower = computerSelection.toLowerCase();
    return compareChoices(playerSelectionToLower, computerSelectionToLower);
}

function compareChoices(compareChoice, compareToChoice){
    let message = '';
    if (compareChoice == 'rock') {
        switch(compareToChoice) {
            case 'rock':
                message = "It's a tie!";
            break;
            case 'paper':
                message = "You Lose! Paper beats rock!";
            break;
            case 'scissors':
                message = "You win! Rock beats Scissors!";
            break;
        }
    } else if (compareChoice == 'paper') {
        switch(compareToChoice) {
            case 'rock':
                message = "You Win! Paper beats rock!";
            break;
            case 'paper':
                message = "It's a tie!";
            break;
            case 'scissors':
                message = "You Lose! Scissors beats Paper!";
            break;
        }
    } else if (compareChoice == 'scissors') {
        switch(compareToChoice) {
            case 'rock':
                message = "You Loose! Rock beats Scissors!";
            break;
            case 'paper':
                message = "You Win! Scissors beats Paper";
            break;
            case 'scissors':
                message = "It's a tie!";
            break;
        }
    }
    return message;
}

function game(){
    for (i = 1; i <= 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}
let playerSelection = window.prompt("What's your choice?");
console.log('Player chooses ' . playerSelection);
let computerSelection = getComputerChoice();
console.log('Computer chooses ' . computerSelection);
// console.log(playRound(playerSelection, computerSelection));