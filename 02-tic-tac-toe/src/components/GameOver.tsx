import type { GameOverProps } from '../models/GameOver';

function GameOver({ winner, onClick }: GameOverProps) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onClick}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
