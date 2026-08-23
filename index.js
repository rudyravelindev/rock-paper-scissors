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
console.log('Computer Choose: ' + ' ' + computerChoice);

// Human choice
function getHumanChoice() {
  let human = prompt('Please enter: rock, paper or scissors');
  return human.toLowerCase();
}
let humanChoice = getHumanChoice();
console.log('You choose: ' + ' ' + humanChoice);
console.log('--------------------------------------------------------------');
// Play Round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'It is a Tie';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Human wins';
  } else return 'Computer wins';
}
let winner = playRound(humanChoice, computerChoice);

if (winner === 'It is a Tie') {
  console.log('No score changed');
} else if (winner === 'Computer wins') {
  computerScore++;
} else {
  humanScore++;
}
console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
console.log(playRound(humanChoice, computerChoice));
console.log('--------------------------------------------------------------');
