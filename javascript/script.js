const playerScoreLabel = document.getElementById("player-score-label");
const tiesScoreLabel = document.getElementById("ties-score-label");
const computerScoreLabel = document.getElementById("ai-score-label");
const playerPick = document.getElementById("player-pick");
const aiPick = document.getElementById("ai-pick");
const weaponsButtons = document.querySelectorAll("button");
const resultsAnnouncement = document.getElementById("results-announcement");

resultsAnnouncement.textContent = "You Won!";

let playerScore = 0;
let aiScore = 0;
let tieScore = 0;

function getComputerSelection() {
  const weapon = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * weapon.length);
  return weapon[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a Tie";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

const gameHandler = (playerSelection, aiSelection) => {
  playerPick.textContent = playerSelection;
  aiPick.textContent = aiSelection;

  const result = playRound(playerSelection, aiSelection);

  if (result === "You Win!") {
    playerScore++;
    playerScoreLabel.textContent = playerScore;
  } else if (result === "You Lose!") {
    aiScore++;
    computerScoreLabel.textContent = aiScore;
  } else {
    tieScore++;
    tiesScoreLabel.textContent = tieScore;
  }
};

weaponsButtons.forEach((weaponButton) => {
  weaponButton.addEventListener("click", () =>
    gameHandler(weaponButton.id, getComputerSelection())
  );
});

/* 
let playerScore = 0;
let aiScore = 0;
let tieScore = 0; */
