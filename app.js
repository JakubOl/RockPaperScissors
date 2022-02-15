const weapons = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

const computerPlay = function () {
  return weapons[Math.trunc(Math.random() * 3)];
};
// const computerWeapon = computerPlay();

function playerWeapon() {
  return prompt("Choose your weapon(rock,paper,scissors)");
}

const playRound = function (pS, cS) {
  console.log(pS, cS);
  if (!weapons.includes(pS)) {
    computerScore++;
    console.log(`You Lose! Computer wins`);
  } else if (
    (pS === "rock" && cS === "rock") ||
    (pS === "paper" && cS === "paper") ||
    (pS === "scissors" && cS === "scissors")
  ) {
    console.log(`It's a draw`);
  } else if (
    (pS === "rock" && cS === "scissors") ||
    (pS === "paper" && cS === "rock") ||
    (pS === "scissors" && cS === "paper")
  ) {
    playerScore++;
    console.log(`You won! ${pS} beats ${cS}`);
  } else {
    computerScore++;
    console.log(`You lost! ${cS} beats ${pS}`);
  }
};

const game = function (rounds) {
  for (let i = 0; i < rounds; i++) {
    playRound(playerWeapon(), computerPlay());
    console.log(playerScore, computerScore);
  }
  return playerScore > computerScore
    ? `You won a game!`
    : playerScore === computerScore
    ? `Its a draw`
    : `You lost a game!`;
};

console.log(game(5));
