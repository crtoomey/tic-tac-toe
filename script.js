const playerOneCard = document.querySelector('.player-one-card');
const playerTwoCard = document.querySelector('.player-two-card');
const playerOneForm = document.querySelector('#player-one-form');
const playerTwoForm = document.querySelector('#player-two-form');
const playerOneNameElement = document.querySelector('#p1-name');
const playerTwoNameElement = document.querySelector('#p2-name');
const displayElement = document.querySelector('.display');
const player1InfoButton = document.querySelector('.enter-player1-info-btn');
const player2InfoButton = document.querySelector('.enter-player2-info-btn');
const startGameButton = document.querySelector('.start-game-btn');
const restartGameButton = document.querySelector('.restart-game-btn');

let counter = 0;
// function for gameboard
const gameboard = (function () {
    const boardArray = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

    const displayBoard = () => {
        console.log(boardArray[0], boardArray[1], boardArray[2]);
        console.log(boardArray[3], boardArray[4], boardArray[5]);
        console.log(boardArray[6], boardArray[7], boardArray[8]);
        document.querySelector('.place1').innerText = boardArray[0];
        document.querySelector('.place2').innerText = boardArray[1];
        document.querySelector('.place3').innerText = boardArray[2];
        document.querySelector('.place4').innerText = boardArray[3];
        document.querySelector('.place5').innerText = boardArray[4];
        document.querySelector('.place6').innerText = boardArray[5];
        document.querySelector('.place7').innerText = boardArray[6];
        document.querySelector('.place8').innerText = boardArray[7];
        document.querySelector('.place9').innerText = boardArray[8];
    };

    const updateBoard = (position) => {
        if (counter % 2 !== 0 && counter <= 9 && win === false) {
            let placementType = "X";
            if (gameboard.boardArray[position] === "X" || gameboard.boardArray[position] === "O") {
                alert("That spot is taken. Try again.");
                gameboard.displayBoard();
            } else {
                boardArray.splice(position, 1, placementType)
                gameController.checkWin(placementType);
                counter++;
            }
            displayBoard();
        } else if (counter % 2 === 0 && counter <= 9 && win === false) {
            let placementType = "O"
            if (gameboard.boardArray[position] === "X" || gameboard.boardArray[position] === "O") {
                alert("That spot is taken. Try again.");
                gameboard.displayBoard();
            } else {
                boardArray.splice(position, 1, placementType)
                gameController.checkWin(placementType);
                counter++;
            }
            displayBoard();
        }
    }


    return { boardArray, displayBoard, updateBoard };
})();

// function for making players
const player = (function () {
    const playerOneInput = document.getElementById('player-one-name');
    const playerTwoInput = document.getElementById('player-two-name');
    const showPlayerNameForm = (playerNum) => {
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
            playerOneNameElement.innerHTML = playerOneName;
            playerOneForm.classList.add('hidden');
            playerOneCard.classList.remove('hidden');
        } else if (playerNum === 2) {
            const playerTwoName = playerTwoInput.value;
            playerTwoNameElement.innerText = playerTwoName;
            playerTwoForm.classList.add('hidden');
            playerTwoCard.classList.remove('hidden');
        }
    };

    const getPlayerName = (playerNum) => {
        if (playerNum === 1) {
            return playerOneNameElement.innerText;
        } else if (playerNum === 2) {
            return playerTwoNameElement.innerText;
        }
    }


    return { showPlayerNameForm, setPlayerName, getPlayerName };
})();

// function to handle gameplay
let win = false;
const gameController = (function () {

    const startGame = () => {
        gameboard.displayBoard();
        startGameButton.classList.add('hidden');
        restartGameButton.classList.remove('hidden');
        player1InfoButton.classList.add('hidden');
        player2InfoButton.classList.add('hidden');
        counter = 1;
        // gameController.playRound(1);
    }

    // const playRound = (roundCounter) => {
    //     const player1 = player.getPlayerName(1);
    //     const player2 = player.getPlayerName(2);

    //     let counter = roundCounter;
    //     for (counter; counter < 10;) {
    //         if (counter % 2 !== 0 && counter <= 9 && win === false) {
    //             displayElement.innerText = `${player1}'s turn!`
    //             playerTwoCard.classList.remove('your-turn');
    //             playerOneCard.classList.add('your-turn');
    //             // const inputType = "X";

    //             // const input = prompt("Where do you want to place your X? (0-8)");
    //             // if (input >= 0 && input <= 8) {
    //             //     if (gameboard.boardArray[input] === "X" || gameboard.boardArray[input] === "O") {
    //             //         alert("That spot is taken. Try again.");
    //             //         gameboard.displayBoard();
    //             //     } else {
    //             //         gameboard.updateBoard(inputType, input);
    //             //         gameController.checkWin(inputType);
    //             //         counter++;
    //             //     }

    //             // } else {
    //             //     alert("Invalid move. Enter a number between 0 and 8.");
    //             // }
    //             console.log("Round " + counter);
    //         } else if (counter % 2 === 0 && counter <= 9 && win === false) {
    //             displayElement.innerText = `${player2}'s turn!`
    //             playerOneCard.classList.remove('your-turn');
    //             playerTwoCard.classList.add('your-turn');
    //             // const inputType = "O";


    //             // const input = prompt("Where do you want to place your O? (0-8)");
    //             // if (input >= 0 && input <= 8) {
    //             //     if (gameboard.boardArray[input] === "X" || gameboard.boardArray[input] === "O") {
    //             //         alert("That spot is taken. Try again.");
    //             //         gameboard.displayBoard();
    //             //     } else {
    //             //         gameboard.updateBoard(inputType, input);
    //             //         gameController.checkWin(inputType);
    //             //         counter++;
    //             //     }
    //             // } else {
    //             //     alert("Invalid move. Enter a number between 0 and 8.");
    //             // }
    //             console.log("Round " + counter);
    //         } else {
    //             counter = 11;
    //         }
    //     }
    //     if (counter === 10 && win === false) {
    //         gameController.gameTied();
    //         counter = 11;
    //     }
    // }


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
        const player1 = player.getPlayerName(1);
        const player2 = player.getPlayerName(2);
        if (winCombo1.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo2.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo3.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo4.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo5.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo6.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo7.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
            }
        }
        else if (winCombo8.every(position => gameboard.boardArray[position] === inputType)) {
            if (inputType === "X") {
                gameController.gameWon(player1);
            } else {
                gameController.gameWon(player2);
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

    return { startGame, checkWin, gameWon, gameTied };
})();

// gameController.startGame();
// gameController.playRound(1);

gameboard.displayBoard();
