let playerScore = 0
let computerScore = 0

let playerChoice

let resultDisplay = document.querySelector(".result")
let playerChoiceDisplay = document.querySelectorAll(".buttons")
let playerPoints = document.querySelector("#pPoints")
let computerPoints = document.querySelector("#cPoints")
let tryAgainButton = document.querySelector(".try-again-noactive")

tryAgainButton.addEventListener("click", () => {
    window.location.reload()
})

playerChoiceDisplay.forEach((oneChoice) => {
    oneChoice.addEventListener("click", (e) => {
       playerChoice = e.target.id
       let result = playRound(playerChoice, getComputerChoice())
       resultDisplay.textContent = result


       if (playerScore == 5) {
            resultDisplay.textContent = "You are the Winner!!" 
            tryAgainButton.classList.remove("try-again-noactive")
            tryAgainButton.classList.add("try-again-active")

            } else if (computerScore == 5){
                resultDisplay.textContent = "You lose!!"
                tryAgainButton.classList.remove("try-again-noactive")
                tryAgainButton.classList.add("try-again-active")

            } else if (result.includes("Win")){
            playerScore++
            playerPoints.textContent = playerScore
           } else if (result.includes("Lose")){
            computerScore++
            computerPoints.textContent = computerScore
           }     
}
     
)})


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














