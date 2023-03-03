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

// play a turn and adjust score
function playTurn() {
  // generate computer's move
  cMove = Math.floor(Math.random() * 3);
  console.log("cMove " + cMove);

  // compare moves to determine winner
  if (pMove == cMove) {
    console.log("Tie");
    console.log("Score" + score);
  } else if ((cMove - pMove) % 3 == 1) {
    console.log("Lose");
    score--;
    console.log("Score" + score);
  } else {
    console.log("Win");
    score++;
    console.log("Score" + score);
  }
}
