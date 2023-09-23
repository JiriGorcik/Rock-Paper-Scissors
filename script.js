

let getComputerChoice = () => {

    let choice = ["Rock", "Paper", "Scissors"]
    let answer = choice[Math.floor(Math.random()*3)]
    return answer
}

console.log(getComputerChoice());