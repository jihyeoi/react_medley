import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Square from "./TicTacToe_Square";
import './TicTacToe_Board.css';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "0";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function resetBoard() {
        setSquares(Array(9).fill(null));
    }

    function goToEightball() {
        Navigate("/eightball");
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = winner + " won!";
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    return (
        <div className="TicTacToe-game">
            <div className="TicTacToe-board">
                <div className="TicTacToe-board-status">
                    {status}
                </div>
                <div className="TicTacToe-board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="TicTacToe-board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="TicTacToe-board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                <div className="TicTacToe-board-status">
                    {winner
                    ? <div>
                    <button
                    className="btn btn-primary pill"
                    onClick={goToEightball}>
                    Blue Pill
                    </button>
                    <button
                    className="btn btn-danger pill"
                    onClick={resetBoard}>
                    Red Pill
                    </button>
                    </div>
                    : "are you x or o..."}
                </div>
            </div>
        </div>
    );
}