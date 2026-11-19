import React, { useState } from "react";
import Square from "../Square/Square.jsx";
import "./Board.css";

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function calculateWinner(squares) {
  for (const [a, b, c] of winningLines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  function handleClick(index) {
    if (squares[index] !== null || winner || isDraw) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isDraw) {
    status = "Empate";
  } else {
    status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="board-area">
      <p className={`game-status ${winner ? "winner" : ""}`} role="status" aria-live="polite">
        {status}
      </p>
      <div className="board" aria-label="Tabuleiro do jogo da velha">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
            disabled={value !== null || Boolean(winner) || isDraw}
          />
        ))}
      </div>
      <button className="new-game-button" onClick={handleNewGame}>
        Novo Jogo
      </button>
    </div>
  );
}

export default Board;