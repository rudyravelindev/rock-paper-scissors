// Computer choice variable
const computerChoices = ["rock", "paper", "scissors"];

// Get the computer choice
function getComputerChoice() {
    const index = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[index];
}

// Get Human choice
function getHumanChoice() {
    var humanChoice = prompt("Please enter: 'rock', 'paper', 'scissors'");
    return humanChoice ? humanChoice.toLowerCase() : "";
}

// Play game function
function playGame() {
    // Declare scores inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Play rounds until someone reaches 5 points
    while (humanScore < 5 && computerScore < 5) {
        console.log(`\nCurrent Score -> Human: ${humanScore}, Computer: ${computerScore}`);
        
        // Get the human and computer selections
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        // Play a single round
        function playRound(humanChoice, computerChoice) {
            console.log(`Human chose: ${humanChoice}`);
            console.log(`Computer chose: ${computerChoice}`);
            
            if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
                (computerChoice === 'scissors' && humanChoice === 'paper') ||
                (computerChoice === 'paper' && humanChoice === 'rock')) {
                console.log("Computer Wins!");
                computerScore++;
            } 
            else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                     (humanChoice === 'scissors' && computerChoice === 'paper') ||
                     (humanChoice === 'paper' && computerChoice === 'rock')) {
                console.log("Human Wins!");
                humanScore++;
            } 
            else {
                console.log("It's a TIE!!");
            }
        }
        
        // Play the round
        playRound(humanSelection, computerSelection);
    }
    
    // Declare the final winner
    console.log(`\nFinal Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore === 5) {
        console.log("Human wins the game!");
    } else if (computerScore === 5) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
