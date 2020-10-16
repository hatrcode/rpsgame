// Define global variables
let playerScore = 0; 
let computerScore = 0; 
let playerSelection, computerSelection;
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const textResult = document.querySelector('.text-result');
const winner = document.querySelector('.winner');
const computerChoice = document.querySelector('.computer-choice');

// Computer choice:
computerPlay = () => {
    let randomNumber = Math.round(Math.random() * 3);
    if (randomNumber == 1) {
        computerSelection = 'r';
        computerChoice.textContent = "I chose Rock!";
    } else if (randomNumber == 2) {
        computerSelection = 'p';
        computerChoice.textContent = "I chose Paper!";
    } else {
        computerSelection = 's';
        computerChoice.textContent = "I chose Scissors!";
    }
}

// Player choice:
playRock = () => {
    return playerSelection = 'r';
}

playPaper = () => {
    return playerSelection = 'p';
}

playScissors = () => {
    return playerSelection = 's';
}

// Win
playerWin = () => {
    playerScore++;
    textScore();
}

computerWin = () => {
    computerScore++;
    textScore();
}

// Play
playRound = (playerSelection, computerSelection) => {
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == computerSelection) {
            textResult.textContent = 'It\'s a Tie!';
        } else if (playerSelection == 'r' && computerSelection == 's') {
            playerWin();
            textResult.textContent = 'You won! Rock beats Scissors';
        } else if (playerSelection == 'p' && computerSelection == 'r') {
            playerWin();
            textResult.textContent = 'You won! Paper beats Rock';
        } else if (playerSelection == 's' && computerSelection == 'p') {
            playerWin();
            textResult.textContent = 'You won! Paper beats Rock';
        } else if (playerSelection == 'r' && computerSelection == 'p') {
            computerWin();
            textResult.textContent = 'You lose! Paper beats Rock';
        } else if (playerSelection == 'p' && computerSelection == 's') {
            computerWin();
            textResult.textContent = 'You lose! Scissors beats Paper';
        } else if (playerSelection == 's' && computerSelection == 'r') {
            computerWin();
            textResult.textContent = 'You lose! Rock beats Scissors';
        }
    }

}

// Add event listener
const rock = document.querySelector('.rock');
rock.addEventListener('click', function() {
    console.log("rock CLICKED");
    playRock();
    computerPlay();
    playRound(playerSelection, computerSelection);
    winnerText();
})
  
const paper = document.querySelector('.paper');
paper.addEventListener('click', function() {
    console.log("PAPER CLICKED");
    playPaper();
    computerPlay();;
    playRound(playerSelection, computerSelection);
    winnerText();
})
  
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function() {
    console.log("scissor CLICKED");
    playScissors();
    computerPlay();
    playRound(playerSelection, computerSelection);
    winnerText();
})

// Result
textScore = () => {
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

// Announce the winner
winnerText = () => {
    if (playerScore === 5) {
        winner.textContent = 'Congratulations! You won!';
        document.querySelector('.context').style.display = 'none';
    } else if (computerScore === 5) {
        winner.textContent = 'Sorry! Good luck next time';
        document.querySelector('.context').style.display = 'none';
    } else if (playerScore === 5 && computerScore === 5) {
        winner.textContent = 'It\'s a Tie!';
        document.querySelector('.context').style.display = 'none';
    }
}

// Retry
const retry = document.querySelector('.retry');
retry.addEventListener('click', function () {
    refresh();
})

refresh = () => {    
    setTimeout(function () {
        location.reload()
    }, 100);
}