import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import type { GameTurn } from './models/GameTurn';
import type { PlayerSymbol } from './models/Player';
import type { BoardValues } from './models/GameBoard';

const initialGameBoard: BoardValues[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  const gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

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
          <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
        </div>
        <Log entries={gameTurns} />
      </main>
    </>
  );
}

export default App;
