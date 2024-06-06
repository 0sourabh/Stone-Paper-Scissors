let userScore = 0;
let computerScore = 0; 

const msg  = document.querySelector("#msg");

const userScorePar = document.querySelector("#user-score");
const compScorePar = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //rock,paper,scissors
    const randomIdx =Math.floor(Math.random()*3);
    return options[randomIdx];
} 

const drawGame = ()=> {
    console.log("game was draw.");
    msg.innerText = ("Draw Game, Try Again!");
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        userScorePar.innerText = userScore;
        console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        compScorePar.innerText = computerScore;
        console.log("you lose");
        msg.innerText=`You lost, ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin =  compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false : true;
        }else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
