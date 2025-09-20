function generateComputerTurn () {
  const turns = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * turns.length);
  const computerTurn = turns[randomIndex];

  return computerTurn;
}

function playRound (userTurn) {
  const computerTurn = generateComputerTurn();

  const loseCases = {
    rock : 'paper',
    paper : 'scissors',
    scissors : 'rock'
  };

  if (userTurn === computerTurn) {
    tie += 1;

    resultPara.textContent = `Tie! The computer was ${computerTurn}`;
    tieBoard.textContent = tie;
  }
  else if (loseCases[userTurn] === computerTurn) {
    lose += 1;

    resultPara.textContent = `Lose! The computer was ${computerTurn}`;
    loseBoard.textContent = lose;
  } 
  else {
     win += 1;

    resultPara.textContent = `Win! The computer was ${computerTurn}`;
    winBoard.textContent = win;
  }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultPara = document.getElementById("result");
const tieBoard = document.getElementById("tie");
const winBoard = document.getElementById("win");
const loseBoard = document.getElementById("lose");
const resetBtn = document.getElementById("reset-btn");

let win = 0;
let tie = 0;
let lose = 0;

rock.addEventListener("click", () => {
  playRound('rock');
});

paper.addEventListener("click", () => {
  playRound('paper');
});

scissors.addEventListener("click", () => {
  playRound('scissors');
});

resetBtn.addEventListener("click", () => {
  win = 0;
  tie = 0;
  lose = 0;

  winBoard.textContent = win;
  tieBoard.textContent = tie;
  loseBoard.textContent = lose;

  resultPara.textContent = 'Scores reset, Press any turn to start';
});




// Old logic
// else if ((userTurn === 'rock' && computerTurn === 'paper') || (userTurn === 'paper' && computerTurn === 'scissors') || (userTurn === 'scissors' && computerTurn === 'rock')) {
//     lose += 1;

//     resultPara.textContent = `Lose! The computer was ${computerTurn}`;
//     loseBoard.textContent = lose;
//   } 