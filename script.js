let playerSelection = prompt("Rock, Paper or Scissors").toLocaleLowerCase()

let getComputerChoice = () => {

    let choice = ["Rock", "Paper", "Scissors"]
    let answer = choice[Math.floor(Math.random()*3)]
    return answer
}

let playRound =  (playerChoice, computerChoice) => {
    playerChoice = playerSelection
    computerChoice = getComputerChoice().toLowerCase()

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

