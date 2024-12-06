
function getRandomInt() {
    const minCeiled = Math.ceil(0); // Hardcoded min = 0
    const maxFloored = Math.floor(2); // Hardcoded max = 2
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerHand(x) {
    let computerHand;
    if (x === 0) {
        computerHand = "rock";
    } else if (x === 1) {
        computerHand = "paper";
    } else if (x === 2) {
        computerHand = "scissors";
    } else {
        computerHand = "unknown"; // For unexpected values
    }
    return computerHand;
}

let x = getRandomInt(); // Generate random number
console.log("Generated number:", x); // Debugging log
let computerHand = getComputerHand(x); // Map number to hand
console.log("Computer hand:", computerHand); // Display result

function getHumanHand() {
    let humanHand = prompt("Choose your hand: paper, rock or scissors");
    humanHand.toLowerCase()
    return humanHand;
}
let humanHand = getHumanHand()
console.log("Human hand: ", humanHand)

function gameRound (computerSelection, humanSelection) {
    if (computerSelection === "rock" && humanSelection === "paper") {
        humanScore += 1;
    } else computerScore += 1;
    return computerScore;
}

const computerSelection = computerHand
const humanSelection = humanHand

let computerScore = 0
let humanScore = 0

console.log("Computer score: ", computerScore)
console.log("Human score: ", humanScore)