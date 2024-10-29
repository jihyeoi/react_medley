import { useState } from "react";

export default function Square({value, onSquareClick}) {
    return (
        <button
            className="TicTacToe-square"
            onClick={onSquareClick}>
            {value}
        </button>
    );
}