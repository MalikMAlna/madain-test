// Cached Variables
let gameOver = false
let player1 = "X";
let player2 = "O";
let playerTurn;
let cell_divs = document.querySelectorAll(".cell")
let currentPlayer_h1 = document.getElementById("player-turn");
let results_div = document.getElementById("results");

// Set Player Turns
const checkCell = (e) => {
    let cell = e.target;
    let currentTurn = playerTurn == player1 ? player1 : player2
    // Draw X or O to board each turn 
}

// Track Rows and Columns
cell_divs.forEach((cell) =>{
    cell.addEventListener("click", checkCell, {once: true});
});


// Check Rows and Columns for Matches

// Set Row, Column, and Diagonal Victory Conditions

// Reset Game Board, regardless of victory conditions