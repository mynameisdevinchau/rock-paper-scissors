function getComputerChoice(){
    
    let randomNumber = Math.random();
    let move = "rock";
    console.log(randomNumber);
    if(randomNumber < 1/3){
        move = "paper";
    } else if(randomNumber < 2/3){
        move = "scissors";
    }

    return move; 
}


function getHumanChoice(){
    let result = prompt("Type your move");
    return result;
}


let humanScore = 0;
let computerScore = 0; 
function playRound(humanChoice, computerChoice){
    //lowercasing everything and trimming the whitespaces
    let humanChoiceCorrected = humanChoice.toLowerCase().trim();
    if(humanChoiceCorrected == computerChoice){
        console.log("It is a tie!");
    } else if(humanChoiceCorrected == 'rock' && computerChoice == 'paper'){
        computerScore++;
        console.log("You lose! Paper beats rock!");
    } else if(humanChoiceCorrected == 'paper' && computerChoice =='scissors'){
        computerScore++;
        console.log("You lose! Scissors beats paper");
    } else if(humanChoiceCorrected == 'scissors' && computerChoice == 'rock'){
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    } else if(humanChoiceCorrected == 'rock' && computerChoice == 'scissors'){
        humanScore++;
        console.log("You win! Rock beats scissors!");
    } else if(humanChoiceCorrected == 'paper' && computerChoice == 'rock'){
        humanScore++;
        console.log("You win! Paper beats rock!");
    } else if(humanChoiceCorrected == 'scissors' && computerChoice == 'paper'){
        humanScore++;
        console.log("You win! Scissors beats paper!");
    }
    else{
        console.log("Please enter a valid move: 'rock', 'paper', or, 'scissors'");
    }
}



function playGame(rounds){
    let computerMove;
    let humanMove;
    for(let i = 0; i < rounds; i++){
        humanMove=getHumanChoice();
        computerMove=getComputerChoice();
        
        playRound(humanMove, computerMove);

    }
    console.log(`Your score is ${humanScore} and the computer score is ${computerScore}`);
    if(humanScore == computerScore){
        console.log("Tie game! Try again!");
    }
    else if(humanScore < computerScore){
        console.log("You lose! Try again!");
    }
    else{
        console.log("You win! Play again!");
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", () =>{
        alert(button.id);
    })
})