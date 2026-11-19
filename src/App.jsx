import React from 'react';
import Board from "./components/Board/Board.jsx";

function App() {
  return (
    <main className="app">
      <section className="game-panel">
        <p className="eyebrow">FRONTEND FRAMEWORKS • REACT</p>
        <h1>Jogo da Velha</h1>
        <p className="subtitle">Um desafio para dois jogadores.</p>
        <Board />
      </section>
      <footer>Desenvolvido com React</footer>
    </main>
  );
}

export default App;