const playerScoreLabel = document.getElementById("player-score-label");
const tiesScoreLabel = document.getElementById("ties-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const playerPick = document.getElementById("player-pick");
const aiPick = document.getElementById("ai-pick");
const weaponsButtons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

weaponsButtons.forEach((weaponButton) => {
  weaponButton.addEventListener("click", () => {
    console.log(weaponButton.id);
  });
});

function getComputerSelection() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * weapons.length - 1);
  return weapons[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
};

const gameHandler = (playerSelection) => {
  const computerSelection = getComputerSelection();
  //playerSelection
  playerPick.textContent = playerSelection;
  //update the player turn
  //computerSelection
  aiPick.textContent = computerSelection;
  //update the computer turn
  const result = playRound(playerSelection, computerSelection);

  if (result === "You Win") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (result === "You Lose") {
    computerScore++;
    computerScoreLabel.textContent = computerScore;
  } else {
    tieScore++;
    tiesScoreLabel.textContent = tieScore;
  }
  //playRound
  //updateScore
};

weaponsButtons.forEach((weaponButton) => {
  weaponButton.addEventListener("click", () => gameHandler(weaponButton.id));
});
