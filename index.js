let humanScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3);
  if (computer === 0) {
    return 'rock';
  } else if (computer === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
let computerChoice = getComputerChoice();
console.log('This is the Computer Choice: ' + ' ' + computerChoice);

// Human choice
function getHumanChoice() {
  let human = prompt('Please enter: rock, paper or scissors');
  return human.toLowerCase();
}
let humanChoice = getHumanChoice();
console.log('You choose: ' + ' ' + humanChoice);

// Play Round
function playRound(humanChoice, computerChoice) {}
console.log(playRound(humanChoice, computerChoice));
