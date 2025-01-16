const playerOneCard = document.querySelector('.player-one-card');
const playerTwoCard = document.querySelector('.player-two-card');
const playerOneForm = document.querySelector('#player-one-form');
const playerTwoForm = document.querySelector('#player-two-form');
const playerOneNameElement = document.querySelector('#p1-name');
const playerTwoNameElement = document.querySelector('#p2-name');

console.log(playerOneNameElement.innerText);


// function for gameboard
const gameboard = (function () {
    const boardArray = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

    const displayBoard = () => {
        console.log(boardArray[0], boardArray[1], boardArray[2]);
        console.log(boardArray[3], boardArray[4], boardArray[5]);
        console.log(boardArray[6], boardArray[7], boardArray[8]);
    };

    const updateBoard = (placementType, placeAt) => {
        boardArray.splice(placeAt, 1, placementType)
        displayBoard();
    }
    return { boardArray, displayBoard, updateBoard };
})();

// function to handle gameplay
let win = false;
const gameController = (function () {


    const startGame = () => {
        gameboard.displayBoard();
        gameController.playRound(1);
    }

    const playRound = (roundCounter) => {
        let counter = roundCounter
        for (counter; counter < 10;) {
            if (counter % 2 !== 0 && counter <= 9 && win === false) {
                console.log("Player 1 turn");
                playerTwoCard.classList.remove('your-turn');
                playerOneCard.classList.add('your-turn');
                const inputType = "X";
                const input = prompt("Where do you want to place your X? (0-8)");
                if (input >= 0 && input <= 8) {
                    if (gameboard.boardArray[input] === "X" || gameboard.boardArray[input] === "O") {
                        alert("That spot is taken. Try again.");
                        gameboard.displayBoard();
                    } else {
                        gameboard.updateBoard(inputType, input);
                        gameController.checkWin(inputType);
                        counter++;
                    }

                } else {
                    alert("Invalid move. Enter a number between 0 and 8.");
                }
                console.log("Round " + counter);
            } else if (counter % 2 === 0 && counter <= 9 && win === false) {
                console.log("Player 2 turn");
                playerOneCard.classList.remove('your-turn');
                playerTwoCard.classList.add('your-turn');
                const inputType = "O";
                const input = prompt("Where do you want to place your O? (0-8)");
                if (input >= 0 && input <= 8) {
                    if (gameboard.boardArray[input] === "X" || gameboard.boardArray[input] === "O") {
                        alert("That spot is taken. Try again.");
                        gameboard.displayBoard();
                    } else {
                        gameboard.updateBoard(inputType, input);
                        gameController.checkWin(inputType);
                        counter++;
                    }
                } else {
                    alert("Invalid move. Enter a number between 0 and 8.");
                }
                console.log("Round " + counter);
            } else {
                counter = 11;
            }
        }
        if (counter === 10 && win === false) {
            gameController.gameTied();
            counter = 11;
        }
    }


    // winning combos = (0, 1, 2), (0, 3, 6), (0, 4, 8), (1, 4, 7), (2, 4, 6), (2, 5, 8), (3, 4, 5), (6, 7, 8)
    // console.log(gameboard.boardArray[0, 1, 2]);
    // console.log(gameboard.boardArray[0, 3, 6]);
    // console.log(gameboard.boardArray[0, 4, 8]);
    // console.log(gameboard.boardArray[1, 4, 7]);
    // console.log(gameboard.boardArray[2, 4, 6]);
    // console.log(gameboard.boardArray[2, 5, 8]);
    // console.log(gameboard.boardArray[3, 4, 5]);
    // console.log(gameboard.boardArray[6, 7, 8]);

    const winCombo1 = [0, 1, 2];
    const winCombo2 = [0, 3, 6];
    const winCombo3 = [0, 4, 8];
    const winCombo4 = [1, 4, 7];
    const winCombo5 = [2, 4, 6];
    const winCombo6 = [2, 5, 8];
    const winCombo7 = [3, 4, 5];
    const winCombo8 = [6, 7, 8];


    //  listen, i know this is probably the worst way to check for wins but idk how to refactor this. i'm sorry.
    const checkWin = (inputType) => {
        if (winCombo1.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo2.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo3.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo4.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo5.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo6.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo7.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
            }
        }
        else if (winCombo8.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                const player = "Player 1"
                gameController.gameWon(player);
                // console.log("Player 1 wins!");
            } else {
                const player = "Player 2"
                gameController.gameWon(player);
                // console.log("Player 2 wins!");
            }
        }
    }

    const gameWon = (player) => {
        console.log(player + " has won the game!");
        win = true;
    }

    const gameTied = () => {
        console.log("Tie.");
        win = false;
    }

    return { startGame, playRound, checkWin, gameWon, gameTied };
})();


// function for making players
const player = (function () {
    const playerOneInput = document.getElementById('player-one-name');
    const playerTwoInput = document.getElementById('player-two-name');
    const getPlayerName = (playerNum) => {
        if (playerNum === 1) {
            playerOneForm.classList.remove('hidden');
            playerOneCard.classList.add('hidden');
        } else if (playerNum === 2) {
            playerTwoForm.classList.remove('hidden');
            playerTwoCard.classList.add('hidden');
        }
    };

    const setPlayerName = (playerNum) => {
        if (playerNum === 1) {
            const playerOneName = playerOneInput.value;
            console.log(playerOneName);
            playerOneNameElement.innerHTML = playerOneName;
            playerOneForm.classList.add('hidden');
            playerOneCard.classList.remove('hidden');
        } else if (playerNum === 2) {
            const playerTwoName = playerTwoInput.value;
            console.log(playerTwoName);
            playerTwoNameElement.innerText = playerTwoName;
            playerTwoForm.classList.add('hidden');
            playerTwoCard.classList.remove('hidden');
        }
    };


    return { getPlayerName, setPlayerName };
})();



// gameController.startGame();
// gameController.playRound(1);
