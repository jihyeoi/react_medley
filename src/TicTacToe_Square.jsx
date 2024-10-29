import { useState } from "react";
import './TicTacToe_Square.css';

export default function Square({value, onSquareClick}) {
    return (
        <button
            className="TicTacToe-square"
            onClick={onSquareClick}>
            {value}
        </button>
    );
}