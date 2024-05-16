
let userChoice = ""
let computerChoice = ""

function play(passedNumber) {

    switch (passedNumber) {
        case 1:
            userChoice = "rock"
            break;
        case 2:
            userChoice = "paper"
            break;
        case 3:
            userChoice = "scissors"
            break;
        default:
            userChoice = "error"
    }


    console.log ("Users choice:" ,userChoice);

    compChoice();

    determineWinner();

}

function compChoice(){
    let randomNumber = Math.random();
 
    if(randomNumber <0.33){
        computerChoice = "rock";
    }else if(computerChoice <0.67){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }

    console.log ("Computers choice:" ,computerChoice)

}

 function determineWinner(){

    if(userChoice === computerChoice){
        console.log("You have tied");
       // return "You have tied"
    }else if(
        userChoice === "rock" && computerChoice ==="scissors" || 
        userChoice === "paper" && computerChoice ==="rock" ||
        userChoice === "scissors" && computerChoice ==="paper" 
        
    ){
        console.log("You Win");
      //  return "You Win"
    }else{
        console.log("You Lose");
        //return "You Lose"
    }

}

play();