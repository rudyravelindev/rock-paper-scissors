// Computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
console.log(getComputerChoice());

// Human choice
function getHumanChoice() {
  let humanChoice = prompt('Please enter: rock, paper or scissors');
  return humanChoice;
}
console.log(getHumanChoice());
