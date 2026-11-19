import React from "react";
import "./Square.css";

function Square({ value, onSquareClick, disabled }) {
  return (
    <button
      type="button"
      className={`square ${value === "X" ? "square-x" : value === "O" ? "square-o" : ""}`}
      onClick={onSquareClick}
      disabled={disabled}
      aria-label={value ? `Casa ${value}` : "Casa vazia"}
    >
      {value}
    </button>
  );
}

export default Square;