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
let gameOver = false;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  if (gameOver) {
    return;
  }
  let computerChoice = getComputerChoice();
  // console.log('Computer choose: ' + computerChoice);
  // console.log('You choose: ' + humanChoice);
  let resultMessage;
  if (humanChoice === computerChoice) {
    resultMessage = 'It is a Tie. No score changed';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    resultMessage = 'You won this round';
  } else {
    computerScore++;
    resultMessage = 'Computer won this round';
  }
  const rounds = document.createElement('div');
  const computer = document.createElement('p');
  const human = document.createElement('p');
  const score = document.createElement('p');
  const roundResult = document.createElement('p');
  computer.textContent = `Computer choose: ${computerChoice}`;
  human.textContent = `You choose: ${humanChoice}`;
  roundResult.textContent = resultMessage;
  score.textContent = `Score — Human: ${humanScore}, Computer: ${computerScore}`;
  rounds.append(computer);
  rounds.append(human);
  rounds.append(roundResult);

  rounds.append(score);

  results.append(rounds);

  // console.log(`Score — Human: ${humanScore}, Computer: ${computerScore}`);

  let winner;
  if (humanScore === 5) {
    winner = 'Human WIN this game';
    gameOver = true;
    const gameWinner = document.createElement('p');
    gameWinner.textContent = winner;
    results.append(gameWinner);
  } else if (computerScore === 5) {
    winner = 'Computer WIN this game';
    gameOver = true;
    const gameWinner = document.createElement('p');
    gameWinner.textContent = winner;
    results.append(gameWinner);
  }
  if (gameOver) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

//UI
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const results = document.querySelector('#game-log');
const resetBtn = document.querySelector('#reset');

// Listeners
rockBtn.addEventListener('click', () => {
  playRound('rock');
});
paperBtn.addEventListener('click', () => {
  playRound('paper');
});
scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});
resetBtn.addEventListener('click', () => {
  resetGame();
});

//Reset Game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  results.textContent = '';
}
