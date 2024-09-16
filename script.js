// Computer choice variable
const computerChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;
let gameOver = false;

// Get the computer choice
function getComputerChoice() {
    const index = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[index];
}

// Play a round of the game
function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    let resultMessage = '';

    if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')) {
        computerScore++;
        resultMessage = `Computer Wins!`;
    } 
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore++;
        resultMessage = `Human Wins!`;
    } 
    else {
        resultMessage = "It's a TIE!!";
    }

    updateUI(humanChoice, computerChoice, resultMessage);
    checkForWinner();
}

// Update the UI after a round
function updateUI(humanChoice, computerChoice, resultMessage) {
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result-message').textContent = `Human chose: ${humanChoice}, Computer chose: ${computerChoice}. ${resultMessage}`;
}

// Check if there is a winner
function checkForWinner() {
    if (humanScore === winningScore || computerScore === winningScore) {
        gameOver = true;
        document.getElementById('result-message').textContent += ` ${
            humanScore === winningScore ? 'Human' : 'Computer'
        } wins the game!`;

        // Disable choice buttons after game is over
        disableChoices();
    }
}

// Disable the choice buttons
function disableChoices() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Enable the choice buttons
function enableChoices() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

// Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateUI('', '', 'Game Reset!');
    enableChoices();
    console.log('Reset button clicked');
}

// Play again: reset the scores but keep the UI
function playAgain() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateUI('', '', 'New game started!');
    enableChoices();
    console.log('Play Again button clicked');
}

// Exit game: disable buttons and display exit message
function exitGame() {
    gameOver = true;
    updateUI('', '', 'Game Over! You have exited.');
    disableChoices();
    console.log('Exit button clicked');
}

// Event listeners for choice buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

// Event listeners for control buttons
document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('play-again-btn').addEventListener('click', playAgain);
document.getElementById('exit-btn').addEventListener('click', exitGame);

// Debug to check if the script is loaded
console.log('Script loaded');