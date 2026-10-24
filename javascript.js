let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// function getHumanChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
//     return choice;
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

// function playGame() {
//      for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//      }

//     console.log("Final Score - You: " + humanScore + ", Computer: " + computerScore);
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won this Round game!");
//     } else if (humanScore < computerScore) {
//         console.log("Sorry! The computer won this Round game.");
//     } else {
//         console.log("It's a tie game!");
//     }
// }

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const buttons = document.querySelectorAll('#buttons button');
const resultsDiv = document.querySelector('#results');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (gameOver) {
            return;
        }

        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        const roundResult = document.createElement('p');
        roundResult.textContent = playRound(humanChoice, computerChoice);
        resultsDiv.appendChild(roundResult);

        const scoreDisplay = document.createElement('p');
        scoreDisplay.textContent =
            `Human: ${humanScore} | Computer: ${computerScore}`;
        resultsDiv.appendChild(scoreDisplay);

        if (humanScore === 5 || computerScore === 5) {
            gameOver = true;

            const winner = document.createElement('h2');

            if (humanScore === 5) {
                winner.textContent = "Congratulations! You won the game!";
            } else {
                winner.textContent = "Sorry! The computer won the game.";
            }

            resultsDiv.appendChild(winner);
        }
    });
});