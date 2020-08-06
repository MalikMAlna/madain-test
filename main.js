// Cached Variables
let gameOver = false
let player1 = "X";
let player2 = "O";
let playerTurn = player1;
let cell_divs = document.querySelectorAll(".cell")
let currentPlayer_h1 = document.getElementById("player-turn");
let results_div = document.getElementById("results");


// Draw Mark Functionality
const drawMark = (cell, currentTurn) => {
    if(currentTurn === player1) {
    cell.innerHTML = currentTurn;
    playerTurn = player2;
    } else if(currentTurn === player2) {
        cell.innerHTML = currentTurn;
        playerTurn = player1;
    }
}

// Set Player Turns
const checkCell = (e) => {
    let cell = e.target;
    let currentTurn = playerTurn;
    // Draw X or O to board each turn 
    drawMark(cell, currentTurn);
    // Change Turns
    // Check Rows and Columns for Matches
    // Set Row, Column, and Diagonal Victory Conditions
}

// Track Rows and Columns
cell_divs.forEach((cell) =>{
    cell.addEventListener("click", checkCell, {once: true});
});

// Reset Game Board, regardless of victory conditions