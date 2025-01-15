
// function for gameboard
const gameboard = (function () {


    const boardArray = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
    const displayBoard = () => {
        // console.log("Start of game");


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

console.log(gameboard.boardArray);

// function to handle gameplay

const gameController = (function () {
    const startGame = () => {
        gameboard.displayBoard();
    }

    const playRound = (roundCounter) => {
        for (let counter = roundCounter; counter < 10;) {
            if (counter % 2 !== 0) {
                console.log("Player 1 turn");
                const inputType = "X";
                const input = prompt("Where do you want to place your X? (0-8)")
                if (input >= 0 && input <= 8) {
                    if (gameboard.boardArray[input] === "X" || gameboard.boardArray[input] === "O") {
                        alert("That spot is taken. Try again.");
                        gameboard.displayBoard();
                    } else {
                        gameboard.updateBoard(inputType, input);
                        counter++;
                    }
                } else {
                    alert("Invalid move. Enter a number between 0 and 8.")
                }
                console.log("Round " + counter);
                // roundCounter++;
            } else {
                console.log("Player 2 turn");
                const inputType = "O";
                const input = prompt("Where do you want to place your O? (0-8)")
                if (input >= 0 && input <= 8) {
                    if (gameboard.boardArray[input] === "X" || gameboard.boardArray[input] === "O") {
                        alert("That spot is taken. Try again.");
                        gameboard.displayBoard();
                    } else {
                        gameboard.updateBoard(inputType, input);
                        counter++;
                    }
                } else {
                    alert("Invalid move. Enter a number between 0 and 8.")
                }
                console.log("Round " + counter);
                // roundCounter++;
            }
        }
    }

    // winning combos = (0, 1, 2), (0, 3, 6), (0, 4, 8), (1, 4, 7), (2, 4, 6), (2, 5, 8), (3, 4, 5), (6, 7, 8)
    const checkWin = () => {

    }

    return { startGame, playRound };
})();


gameController.startGame();
gameController.playRound(1);
