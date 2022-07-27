const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let playerWins = 0;
let computerWins = 0;
let playerName = prompt('Tell me your Name...please!');

if (playerName === null) {
    playerName = 'Player';
}

function showGameRules() {
    console.log(`Hi ${playerName}!`);
    console.log('Play: ROCK PAPER SCISSORS against the computer!');
    console.log('The rules are simple:');
    console.log('Rock beats Scissors');
    console.log('Paper beats Rock');
    console.log('Scissors beats Paper');
    console.log('In case of a tie, nobody wins the round')
    console.log('Choose your weapon, wisely!')
    console.log('Good luck!');
    console.log('The first one to win 5 rounds, wins the game!');
    console.log('');
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = randomNumber === 0 ? rock : randomNumber === 1 ? paper : scissors;
    console.log('Computer:', computerChoice);
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt('Choose your Weapon: Rock, Paper or Scissors').toLowerCase();
    let wrongInput = (playerChoice !== rock && playerChoice !== paper && playerChoice !== scissors);
    while (wrongInput) {
        alert('You should input one of the 3 words');
        playerChoice = prompt('Choose your Weapon: Rock, Paper or Scissors').toLowerCase();
        wrongInput = (playerChoice !== rock && playerChoice !== paper && playerChoice !== scissors);
    }
    console.log(`${playerName}:`, playerChoice);
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionFirstCapital = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    const computerSelectionFirstCapital = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    const youWin = `You Win!`;
    const winComment = ` ${playerSelectionFirstCapital} beats ${computerSelectionFirstCapital}!`;
    const youLose = `You Lose!`;
    const loseComment = ` ${computerSelectionFirstCapital} beats ${playerSelectionFirstCapital}!`;
    const tie = `It's a tie!`;

    if (playerSelection === rock && computerSelection === scissors) {
        playerWins++;
        return youWin + winComment;
    } else if (playerSelection === paper && computerSelection === rock) {
        playerWins++;
        return youWin + winComment;
    } else if (playerSelection === scissors && computerSelection === paper) {
        playerWins++;
        return youWin + winComment;
    } else if (computerSelection === rock && playerSelection === scissors) {
        computerWins++;
        return youLose + loseComment;
    } else if (computerSelection === paper && playerSelection === rock) {
        computerWins++;
        return youLose + loseComment;
    } else if (computerSelection === scissors && playerSelection === paper) {
        computerWins++;
        return youLose + loseComment;
    } else {
        return tie;
    }
}

function game() {
    showGameRules();
    let lessThanFiveRoundsWon = true;

    while (lessThanFiveRoundsWon) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        lessThanFiveRoundsWon = playerWins < 5 && computerWins < 5;
        console.log(roundResult);
        console.log(`You won ${playerWins} rounds`);
        console.log(`The computer won ${computerWins} rounds`);
        console.log('');
    }

    if (playerWins === 5) {
        console.log(`Congratulations ${playerName}! You won the game!`);
    } else if (computerWins === 5) {
        console.log(`Sorry ${playerName}! You lost this time!`);
    }
}

game();