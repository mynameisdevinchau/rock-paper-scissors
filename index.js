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
console.log(getComputerChoice());


// function getHumanChoice(){
//     let result = prompt("type something");
//     return result;
// }