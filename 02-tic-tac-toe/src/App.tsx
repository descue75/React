import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import type { GameTurn } from './models/GameTurn';
import type { PlayerSymbol } from './models/Player';

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const [activePlayer, setActivePlayer] = useState<PlayerSymbol>('X');

  function selectSquareHandler(rowIndex: number, colIndex: number) {
    console.log('Square selected:', rowIndex, colIndex);

    setActivePlayer((prev) => (prev === 'X' ? 'O' : 'X'));

    setGameTurns((prevTurns) => {
      let currentPlayer: PlayerSymbol = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
              isActive={activePlayer === 'X'}
            />
            <Player
              initialName='Player 2'
              symbol='Y'
              isActive={activePlayer === 'O'}
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
