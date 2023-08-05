const prompt = require("prompt-sync")();


function computerSelection()
{
    const arr = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random()*3);
    return(arr[compChoice]);
}

const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
const computerChoice = computerSelection();


function playRound(playerSelection, computerSelection) 
{
    if (playerSelection==="rock" || playerSelection==="paper" || playerSelection==="scissors")
    {
        if(playerSelection===computerSelection)
        {
            console.log("Its a tie!");
        }
    
        else if(
            (playerSelection==="rock" && computerSelection==="scissors")||
            (playerSelection==="paper" && computerSelection==="rock")||
            (playerSelection==="scissors" && computerSelection==="paper")
        )
        {
            console.log("You win!");
        }
        else
        {
            console.log("Computer wins");
        }

    console.log("Player chooses:", playerSelection);
    console.log("Computer chooses:", computerChoice);

    } else {
        console.log("Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
    }

}


playRound(playerSelection.toLowerCase(), computerChoice);