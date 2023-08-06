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
            return 1;
        }
        else
        {
            console.log("Computer wins");
            return -1;
        }

    console.log("Player chooses:", playerSelection);
    console.log("Computer chooses:", computerSelection);

    } else {
        console.log("Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
        return 0;
    }

}


playRound(playerSelection.toLowerCase(), computerChoice);


function game(){

    let playerScore = 0;
    let compScore = 0;

    for (let round=1; round<=5; round++){
        console.log(`round "${round}:`)


        const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
        const computerChoice = computerSelection();

        const roundresult = playRound(playerSelection.toLowerCase(), computerChoice);

        if (roundresult===1){
            playerScore++;
        }
        else if(roundresult===-1){
            compScore++;
        }

        console.log("Player's Score:", playerScore);
        console.log("Comp's Score:", compScore);

    }

    if(playerScore>compScore){
        console.log("You won the game!");
    }
    else if(playerScore<compScore){
        console.log("You lost the game!, Comp won!");
    }
    else{
        console.log("It was a tie")
    }

}

game();