import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  return (
    <>
      <header>
        <img src='game-logo.png' alt='Hand-drawn tic tac toe game board' />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player initialName='Player 1' symbol='X' />
            <Player initialName='Player 2' symbol='Y' />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
