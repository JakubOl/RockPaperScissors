const weapons = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let playerWeapon;
let computerWeapon;
const winningScore = 5;
const weaponsContainer = document.querySelector(".weapons");
const winnerText = document.querySelector(".winnerText");
const playerDisplayScore = document.querySelector(".playerDisplay");
const computerDisplayScore = document.querySelector(".computerDisplay");
const resetButton = document.querySelector(".reset");
const playerDisplayWeapon = document.querySelector("#playerChoosenWeapon");
const computerDisplayWeapon = document.querySelector("#computerChoosenWeapon");
let isPlaying = true;

const computerPlay = function () {
  return weapons[Math.trunc(Math.random() * 3)];
};

const playRound = function (pS, cS) {
  console.log(pS, cS);
  if (!weapons.includes(pS)) {
    computerScore++;
    winnerText.textContent = `You Lose!\n Computer wins`;
  } else if (
    (pS === "rock" && cS === "rock") ||
    (pS === "paper" && cS === "paper") ||
    (pS === "scissors" && cS === "scissors")
  ) {
    winnerText.textContent = `It's a tie`;
  } else if (
    (pS === "rock" && cS === "scissors") ||
    (pS === "paper" && cS === "rock") ||
    (pS === "scissors" && cS === "paper")
  ) {
    playerScore++;
    winnerText.textContent = `You won!\n${pS.toUpperCase()} beats ${cS.toUpperCase()}`;
  } else {
    computerScore++;
    winnerText.textContent = `You lost!\n 
    ${cS.toUpperCase()} beats ${pS.toUpperCase()}`;
  }
};

const updateScore = function () {
  playerDisplayScore.textContent = playerScore;
  computerDisplayScore.textContent = computerScore;
};

const winner = function (winner) {
  winner
    ? (winnerText.textContent = `You won a game`)
    : (winnerText.textContent = `You lost a game`);
  winnerText.style.fontSize = "30px";
};

weaponsContainer.addEventListener("click", function (e) {
  playerWeapon = e.target.id;
  computerWeapon = computerPlay();
  if (!playerWeapon) return;
  if (isPlaying) {
    playRound(playerWeapon, computerWeapon);
    updateScore();
    playerDisplayWeapon.innerHTML = `<img class="weapon" src="./img/${e.target.id}.png" alt="Player weapon" />`;
    computerDisplayWeapon.innerHTML = `<img class="weapon" src="./img/${computerWeapon}.png" alt="Player weapon" />`;
  }

  if (playerScore >= winningScore) {
    isPlaying = false;
    return winner(true);
  } else if (computerScore >= winningScore) {
    isPlaying = false;
    return winner(false);
  }
});

resetButton.addEventListener("click", function () {
  isPlaying = true;
  playerScore = 0;
  computerScore = 0;
  updateScore();
  winnerText.innerHTML = `<h2>Choose your weapon</h2>
  <h3>First to 5 wins</h3>`;
  winnerText.style.fontSize = "20px";
  playerDisplayWeapon.innerHTML = `?`;
  computerDisplayWeapon.innerHTML = `?`;
});
