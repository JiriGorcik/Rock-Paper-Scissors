let playerScore = 0
let computerScore = 0


let getPlayerChoice = () => {
   let answer = prompt("Rock, Paper or Scissors").toLowerCase()
   return answer
}   

let getComputerChoice = () => {

    let choice = ["Rock", "Paper", "Scissors"]
    let answer = choice[Math.floor(Math.random()*3)]
    return answer.toLowerCase()
}

let playRound =  (playerChoice, computerChoice) => {
    

    if (playerChoice === computerChoice) {
        return "Tie"
    }
    else if (playerChoice === "rock" && computerChoice == "paper") {
        return "You Lose, paper beats rock" 
    }
    else if (playerChoice === "rock" && computerChoice == "scissors") {
        return "You Win, rock beats scissors"
    }
    else if (playerChoice === "paper" && computerChoice == "rock") {
        return "You Win, paper beats rock"
    }
    else if (playerChoice === "paper" && computerChoice == "scissors") {
        return "You Lose, scissors beats paper"
    }
    else if (playerChoice === "scissors" && computerChoice == "rock") {
        return "You Lose, rock beats scissors"
    }
    else if (playerChoice === "scissors" && computerChoice == "paper") {
        return "You Win, scissors beats paper"
    }  
}

let game = () => {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++){
        let player = getPlayerChoice()
        let comp = getComputerChoice()
        console.log(playRound(player, comp));


        if (playRound(player, comp).includes("Win")) {
            playerScore++
        } else if (playRound(player, comp).includes("Lose")) {
            computerScore++
        }
        console.log(`${playerScore} : ${computerScore}`);
        console.log("-----------");
     }

     console.log(`Game over`);

     if (playerScore > computerScore) {
        console.log("You are the Winner!!"); 
     } else if (computerScore > playerScore) {
        console.log("You lose, reload the page and try again"); 
     } else {
        console.log("Almost it's tie"); 
     }
}

game()




