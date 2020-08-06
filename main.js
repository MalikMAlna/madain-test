// Cached Variables
let gameOver;
let draw;
let player1 = "X";
let player2 = "O";
let playerTurn = player1;
let cell_divs = document.querySelectorAll(".cell"); 
let currentPlayer_h1 = document.getElementById("player-turn");
let results_div = document.getElementById("results");

// Set Row, Column, and Diagonal Victory Conditions
const POSSIBLE_WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


// Draw Mark Functionality
const drawMark = (cell, currentTurn) => {
    // Change Turns
    if(currentTurn === player1) {
    cell.classList.add("cell-marked");
    cell.classList.add("X");
    cell.innerHTML = currentTurn;
    currentPlayer_h1.innerHTML = "Player 2's Turn";
    playerTurn = switchTurns(playerTurn);
    } else if(currentTurn === player2) {
        cell.classList.add("cell-marked");
        cell.classList.add("O");
        cell.innerHTML = currentTurn;
        currentPlayer_h1.innerHTML = "Player 1's Turn";
        playerTurn = switchTurns(playerTurn);
    }
}

// Set Player Turns
const switchTurns = (playerTurn) => {
    if(playerTurn === player1) {
        return playerTurn = player2
    } else if(playerTurn === player2) {
        return playerTurn = player1
    }
}

const checkCell = (e) => {
    let cell = e.target;
    let currentTurn = playerTurn;
    // Draw X or O to board each turn 
    drawMark(cell, currentTurn);
    // Check Rows and Columns for Matches
    if(checkForWin(currentTurn)) {
        results_div.innerHTML = `${currentTurn} wins!`
        gameOver = true;
    } else if(isDraw()) {
        results_div.innerHTML = "DRAW!";
    }
}

const checkForWin = (currentTurn) => {
 return POSSIBLE_WINNING_COMBINATIONS.some(possible_combos => {
     return possible_combos.every(idx => {
         return cell_divs[idx].classList.contains(currentTurn);
     });
 });
}

const isDraw = () => {
    return [...cell_divs].every(idx =>{
        return idx.classList.contains("cell-marked");
    });
}

// Track Rows and Columns
cell_divs.forEach((cell) =>{
    cell.addEventListener("click", checkCell, {once: true});
});


// Reset Game Board, regardless of victory conditions
const resetGame = () => {
    location.reload();
}