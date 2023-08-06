const button1 = document.getElementById("Rock");
const button2 = document.getElementById("Paper");
const button3 = document.getElementById("Scissors");
const resultsDiv = document.getElementById("results");

let playerScore = 0;
let compScore = 0;

button1.addEventListener("click", function () {
  playRound("rock", computerSelection());
});

button2.addEventListener("click", function () {
  playRound("paper", computerSelection());
});

button3.addEventListener("click", function () {
  playRound("scissors", computerSelection());
});

function computerSelection() {
  const arr = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * 3);
  return arr[compChoice];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultsDiv.innerHTML = "You win this round!<br>";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    compScore++;
    resultsDiv.innerHTML = "Computer wins this round!<br>";
  } else {
    resultsDiv.textContent = "It's a tie!\n";
  }

  // Display the running score
  resultsDiv.innerHTML += `<br>Player: ${playerScore} - Computer: ${compScore}`;

  // Check if any player reached 5 points
  if (playerScore === 5) {
    resultsDiv.innerHTML += " You won the game!<br>";
    resetGame();
  } else if (compScore === 5) {
    resultsDiv.innerHTML += " Computer won the game!<br>";
    resetGame();
  }
}

function resetGame() {
  // Reset scores and announce the winner
  playerScore = 0;
  compScore = 0;

  // You can add any additional reset logic here if needed
}