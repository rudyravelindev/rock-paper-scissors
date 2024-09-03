// computer choice variable
const computerChoice = ["rock", "paper", "scissors"];

// Get the computer choice
function getComputerChoice(computerChoice){
    const newComputerChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[newComputerChoice];
}

console.log(getComputerChoice(computerChoice));