// Computer choice variable
const computerChoices = ["rock", "paper", "scissors"];

// Get the computer choice
function getComputerChoice() {
    const index = Math.floor(Math.random() * computerChoices.length); // Use the correct array name
    return computerChoices[index];
}

// Get Human choice
function getHumanChoice() {
    var humanChoice = prompt("Please enter: 'rock', 'paper', 'scissors'");
    return humanChoice ? humanChoice.toLowerCase() : "";
}

// Declare two new variables to hold the players' scores
var humanScore = 0;
var computerScore = 0;

// Play a single round
function playRound(humanChoice, computerSelection) {
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerSelection}`);

    if ((computerSelection === 'rock' && humanChoice === 'scissors') ||
        (computerSelection === 'scissors' && humanChoice === 'paper') ||
        (computerSelection === 'paper' && humanChoice === 'rock')) 
    {
        console.log("Computer Wins!");
        computerScore++;
    } 
    else if ((humanChoice === 'rock' && computerSelection === 'scissors') ||
             (humanChoice === 'scissors' && computerSelection === 'paper') ||
             (humanChoice === 'paper' && computerSelection === 'rock')) 
    {
        console.log("Human Wins!");
        humanScore++;
    } 
    else {
        console.log("It's a TIE!!");
    }
}

// Get the human and computer selections
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Play the round
playRound(humanSelection, computerSelection);


// Display the scores
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
