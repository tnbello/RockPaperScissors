// Player's Move, Computer's Move, Player's Score
let pMove;
let cMove;
let numRounds = 0;
let score= 0;
const Rock = {name: "Rock", won: " crushes ", lost: " was covered by "};
const Paper = {name: "Paper", won: " covers ", lost: " was cut by "};
const Scissors = {name: "Scissors", won: " cuts ", lost: " was crushed by "};
const choices = [Rock, Paper, Scissors];

// assign chosen value to pMove
function assignMove(id) {
  pMove = id;
  playTurn();
}

// play a turn
function playTurn() {
  // generate computer's move and set round number 
  cMove = Math.floor(Math.random() * 3);
  numRounds++;

  // compare moves to determine winner
  if (pMove == cMove) {
    document.getElementById("verdict").textContent = "Round " + numRounds +": You tied";
    document.getElementById("play").textContent = "The computer also played " + choices[cMove].name;
  } else if ((((cMove - pMove) + 3)) % 3 == 1) {
    score--;
    document.getElementById("verdict").textContent = "Round " + numRounds +": You lost";
    document.getElementById("play").textContent = choices[pMove].name + choices[pMove].lost + choices[cMove].name;
  } else {
    score++;
    document.getElementById("verdict").textContent = "Round " + numRounds +": You won!";
    document.getElementById("play").textContent = choices[pMove].name + choices[pMove].won + choices[cMove].name;
  }

  console.log("player: " + pMove + " Computer: " + cMove);
  console.log(((cMove - pMove) + 3) % 3);
  // update display
  document.getElementById("score").textContent = "Score: " + score;
}

// reset game
function reset() {
  score = 0;
  numRounds = 0;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("verdict").textContent = "Select your move...";
  document.getElementById("play").textContent = "";

}