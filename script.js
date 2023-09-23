let playerSelection = prompt("Rock, Paper or Scissors").toLocaleLowerCase()

let getComputerChoice = () => {

    let choice = ["Rock", "Paper", "Scissors"]
    let answer = choice[Math.floor(Math.random()*3)]
    return answer
}

