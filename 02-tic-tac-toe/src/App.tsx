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
            <li>
              <span className='player-name'>Player 1</span>
              <span className='player-sympol'>X</span>
            </li>
            <li>
              <span className='player-name'>Player 2</span>
              <span className='player-sympol'>O</span>
            </li>
          </ol>
          GAME BOARD
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
