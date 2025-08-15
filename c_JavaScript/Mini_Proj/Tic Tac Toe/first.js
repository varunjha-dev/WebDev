// * Initializing Game Variables
let turn = 'O'; // * Player 'O' starts first
let total_turn = 0; // * Counts the number of turns taken

// ? Winning combinations (Indexes on the board)
// * Rows, Columns, and Diagonals that determine a win
let winner = [
    [0,1,2], [3,4,5], [6,7,8], // * Horizontal Wins
    [0,3,6], [1,4,7], [2,5,8], // * Vertical Wins
    [0,4,8], [2,4,6]           // * Diagonal Wins
];

// * Initializing the Tic-Tac-Toe board with empty values ('E')
let board_array = new Array(9).fill("E"); // * 'E' represents an empty cell

// ! Function to Check for a Winner
function checkWinner() {
    for (let [index0, index1, index2] of winner) {
        // ? If all three positions in a winning combination are the same and not empty, we have a winner!
        if (board_array[index0] !== 'E' && 
            board_array[index0] === board_array[index1] && 
            board_array[index1] === board_array[index2]) {
            return 1; // * Winner Found
        }
    }
    return 0; // * No Winner Yet
}

// ! Function to Handle a Player's Move
const printer = (event) => {
    const element = event.target; // * The clicked cell

    // ? Check if the clicked cell is empty
    if (board_array[element.id] === "E") { 
        total_turn++; // * Increase turn count

        // ? If it's 'O's turn, mark 'O' and switch to 'X'
        if (turn === 'O') {
            element.innerText = "O"; // * Update UI
            board_array[element.id] = "O"; // * Update internal board state

            // ? Check if 'O' wins
            if (checkWinner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is O"; 
                board.removeEventListener('click', printer); // * Stop further moves
                return;
            }
            turn = 'X'; // * Switch turn to 'X'
        }
        // ? If it's 'X's turn, mark 'X' and switch to 'O'
        else {
            element.innerText = "X"; // * Update UI
            board_array[element.id] = "X"; // * Update internal board state

            // ? Check if 'X' wins
            if (checkWinner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is X";
                board.removeEventListener('click', printer); // * Stop further moves
                return;
            }
            turn = 'O'; // * Switch turn to 'O'
        }

        // ! Check for a Draw (No empty cells left)
        if (total_turn === 9) {
            document.getElementById('winningMessage').innerHTML = "Match Drawn";
        }
    }
}

// * Selecting the board and adding event listener for clicks
const board = document.querySelector('.board');
board.addEventListener('click', printer); // ? Calls 'printer' function on cell click

// ! Restart Button Logic
const restart = document.getElementById('restartButton');
restart.addEventListener('click', (event) => {
    
    // ? Select all board cells and clear them
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((value) => {
        value.innerHTML = ""; // * Clear cell content
    });

    // ? Reset game variables
    turn = 'O'; 
    total_turn = 0;
    board_array = new Array(9).fill("E"); // * Reset board state

    // ? Clear the winning message
    document.getElementById('winningMessage').innerHTML = "";

    // * Re-enable board event listener
    board.addEventListener('click', printer);
});
