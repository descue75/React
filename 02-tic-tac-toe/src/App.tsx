import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import type { GameTurn } from './models/GameTurn';
import type { PlayerChange, PlayerName, PlayerSymbol } from './models/Player';
import type { BoardValues } from './models/GameBoard';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

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
  const [players, setPlayers] = useState<PlayerName>({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const currentPlayer = deriveActivePlayer(gameTurns);

  const gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  // derive winner
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function restartHandler() {
    setGameTurns([]);
  }

  function playerChangeHandler({ symbol, newName }: PlayerChange) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
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
              onChangeName={playerChangeHandler}
            />
            <Player
              initialName='Player 2'
              symbol='O'
              isActive={currentPlayer === 'O'}
              onChangeName={playerChangeHandler}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onClick={restartHandler} />
          )}
          <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
        </div>
        <Log entries={gameTurns} />
      </main>
    </>
  );
}

export default App;
