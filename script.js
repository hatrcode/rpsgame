// Define global variables
let playerScore = 0; 
let computerScore = 0; 
let playerMove, computerMove;
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const result = document.getElementById('result');
const textResult = document.getElementById('text-result');

// Player choice:
playRock = () => {
    return playerMove = 'r';
}

playPaper = () => {
    return playerMove = 'p';
}

playScissors = () => {
    return playerMove = 's';
}

// Computer choice:
computerChoice = () => {
    let randomNumber = Math.round(Math.random() * 3);
        if (randomNumber == 1) {
            computerMove = 'r';
        } else if (randomNumber == 2) {
            computerMove = 'p';
        } else {
            computerMove = 's';
        }
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
play = (playerMove, computerMove) => {
    while (playerScore < 5 && computerScore < 5) {
        if (playerMove == computerMove) {
            textResult.textContent = 'You both choose the same!';
        } else if (playerMove == 'r' && computerMove == 's') {
            playerWin();
        } else if (playerMove == 'p' && computerMove == 'r') {
            playerWin();
        } else if (playerMove == 's' && computerMove == 'p') {
            playerWin();
        } else if (playerMove == 'r' && computerMove == 'p') {
            computerWin();
        } else if (playerMove == 'p' && computerMove == 's') {
            computerWin();
        } else if (playerMove == 's' && computerMove == 'r') {
            computerWin();
        }
    }
    if (playerScore === 5) {
        result.textContent = 'You won!';
    } else if (computerScore === 5) {
        result.textContent = 'You lose';
    } else {
        result.textContent = 'It\'s a Tie!';
    }
}

// Add event listener
const rock = document.getElementById('rock');
  rock.addEventListener('click', function() {
      console.log("rock CLICKED");
      playRock();
      computerChoice();
      play(playerMove, computerMove);
  })
  
const paper = document.getElementById('paper');
  paper.addEventListener('click', function() {
    console.log("PAPER CLICKED");
      playPaper();
      computerChoice();;
      play(playerMove, computerMove);
})
  
const scissors = document.getElementById('scissors');
  scissors.addEventListener('click', function() {
    console.log("scissor CLICKED");
      playScissors();
      computerChoice();
      play(playerMove, computerMove);
  })

// Result
textScore = () => {
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

// Retry
const retry = document.getElementById('retry');
retry.addEventListener('click', function () {
    refresh();
})

refresh = () => {    
    setTimeout(function () {
        location.reload()
    }, 100);
}