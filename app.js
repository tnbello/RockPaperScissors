// Player's Move, Computer's Move, Player's Score
let pMove;
let cMove;
let score = 0;

// assign chosen value to pMove
function assignMove(id) {
  pMove = id;
  console.log("pMove " + pMove);
  playTurn();
}

// play a turn
function playTurn() {
  // generate computer's move
  cMove = Math.floor(Math.random() * 3);
  console.log("cMove " + cMove);

  // compare moves to determine winner
  if (pMove == cMove) {
    document.getElementById("verdict").textContent = " You tied";
  } else if ((cMove - pMove) % 3 == 1) {
    score--;
    document.getElementById("verdict").textContent = "You lost";
  } else {
    score++;
    document.getElementById("verdict").textContent = "You won!";
  }

  // update displayed score
  document.getElementById("score").textContent = "Score: " + score;
}

// reset score
function reset() {
  score = 0;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("verdict").textContent = "";
}