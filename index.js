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

// Human choice
function getHumanChoice() {
  let human = prompt('Please enter: rock, paper or scissors');
  if (human === null) return null;
  human = human.toLowerCase().trim();
  if (!['rock', 'paper', 'scissors'].includes(human)) {
    console.log('Invalid input, defaulting to rock');
    return 'rock';
  }
  return human;
}

// Play Game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  // Play Round
  function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log('Computer choose: ' + ' ' + computerChoice);
    console.log('You choose: ' + ' ' + humanChoice);

    if (humanChoice === computerChoice) {
      console.log('It is a Tie. No score changed');
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log('You won this round');
    } else {
      computerScore++;
      console.log('Computer won this round');
    }
  }
  console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
  console.log('--------------------------------------------');

  console.log('Round 1');
  playRound();
  console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
  console.log('--------------------------------------------');

  console.log('Round 2');
  playRound();
  console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
  console.log('--------------------------------------------');

  console.log('Round 3');
  playRound();
  console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
  console.log('--------------------------------------------');

  console.log('Round 4');
  playRound();
  console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
  console.log('--------------------------------------------');

  console.log('Round 5');
  playRound();
  console.log('Human is: ' + humanScore, 'Computer is: ' + computerScore);
  console.log('--------------------------------------------');

  if (humanScore === computerScore) {
    console.log('It was a tie game');
  } else if (humanScore > computerScore) {
    console.log('Human WIN this game');
  } else console.log('Computer WIN this game');
}
playGame();
