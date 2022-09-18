// Tic-Tac-Toe
// Author: Jonathan Chung

var board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
var currentTurn = 'X';
var icon = 'x image.png';
var buttons = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];

function buttonPressed(id) { 
    if (document.getElementById(id).id == "b1") {
        board[0][0] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b2") {
        board[0][1] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b3") {
        board[0][2] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b4") {
        board[1][0] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b5") {
        board[1][1] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b6") {
        board[1][2] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b7") {
        board[2][0] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b8") {
        board[2][1] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    } else if (document.getElementById(id).id == "b9") {
        board[2][2] = currentTurn;
        checkWinner(board, currentTurn);
        swapTurn(id);
        document.getElementById(id).disabled = true;
    }
}

function swapTurn(id) { 
    if (currentTurn == 'X') {
        document.getElementById(id).src = icon;
        currentTurn = 'O';
        icon = 'o image.png';
    } else {
        document.getElementById(id).src = icon;
        currentTurn = 'X';
        icon = 'x image.png';
    }
}

function checkWinner(game, player) {
    if (board[0][0] == currentTurn && board[0][1] == currentTurn && board[0][2] == currentTurn) {
        win();
    } else if (board[1][0] == currentTurn && board[1][1] == currentTurn && board[1][2] == currentTurn) {
        win();
    } else if (board[2][0] == currentTurn && board[2][1] == currentTurn && board[2][2] == currentTurn) {
        win();
    } else if (board[0][0] == currentTurn && board[1][0] == currentTurn && board[2][0] == currentTurn) {
        win();
    } else if (board[0][1] == currentTurn && board[1][1] == currentTurn && board[2][1] == currentTurn) {
        win();
    } else if (board[0][2] == currentTurn && board[1][2] == currentTurn && board[2][2] == currentTurn) {
        win();
    } else if (board[0][0] == currentTurn && board[1][1] == currentTurn && board[2][2] == currentTurn) {
        win();
    } else if (board[0][2] == currentTurn && board[1][1] == currentTurn && board[2][0] == currentTurn) {
        win();
    } else if (checkForTie()) {
        var text = document.getElementById('outcome');
        text.textContent = 'Tie';
        text.style.display = 'block';
    }
}

function disableBoard() {
    for(let i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).disabled = true;
    }
}

function win() {
    disableBoard();
    var text = document.getElementById('outcome');
    text.textContent = currentTurn + ' win';
    text.style.display = 'block';
}

function checkForTie() {
    for(let i = 0; i < board.length; i++) {
        for(let m = 0; m < 3; m++) {
            if (board[i][m].includes("-")) {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    board = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];
    currentTurn = 'X';
    icon = 'x image.png';
    var text = document.getElementById('outcome');

    text.style.display = 'none';
    text.textContent = 'Sample Text';

    for(let i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).src = 'square.png';
        document.getElementById(buttons[i]).disabled = false;
    }
}