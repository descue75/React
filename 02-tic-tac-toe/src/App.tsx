import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import type { GameTurn } from './models/GameTurn';
import type { PlayerSymbol } from './models/Player';

function deriveActivePlayer(gameTurns: GameTurn[]) {
  let currentPlayer: PlayerSymbol = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

  function selectSquareHandler(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <header>
        <img src='game-logo.png' alt='Hand-drawn tic tac toe game board' />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player
              initialName='Player 1'
              symbol='X'
              isActive={currentPlayer === 'X'}
            />
            <Player
              initialName='Player 2'
              symbol='Y'
              isActive={currentPlayer === 'O'}
            />
          </ol>
          <GameBoard onSelectSquare={selectSquareHandler} turns={gameTurns} />
        </div>
        <Log entries={gameTurns} />
      </main>
    </>
  );
}

export default App;
