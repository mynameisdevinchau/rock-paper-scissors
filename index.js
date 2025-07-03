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
    const buttons = document.querySelectorAll(".but");
    let move;
    buttons.forEach(bt=>{
        bt.addEventListener('click', (e)=>{
            move = e.target.innerHTML;
        })
    })
    return move;
}


let humanScore = 0;
let computerScore = 0; 
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    //lowercasing everything and trimming the whitespaces
    if(humanChoice == computerChoice){
        console.log("It is a tie!");
    } else if(humanChoice == 'rock' && computerChoice == 'paper'){
        computerScore++;
        console.log("You lose! Paper beats rock!");
    } else if(humanChoice == 'paper' && computerChoice =='scissors'){
        computerScore++;
        console.log("You lose! Scissors beats paper");
    } else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    } else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore++;
        console.log("You win! Rock beats scissors!");
    } else if(humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore++;
        console.log("You win! Paper beats rock!");
    } else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore++;
        console.log("You win! Scissors beats paper!");
    }
    else{
        console.log("Please enter a valid move: 'rock', 'paper', or, 'scissors'");
    }
}



function playGame(){
    let computerMove;
    let humanMove;
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


playRound();

