import './App.css';
import Board from './components/Board';
import { useSelector, useDispatch } from 'react-redux'
import { resetBoard } from './features/board'
import { setTurn } from './features/playerXTurn'

function App() {
  const dispatch = useDispatch()
  const isTurnX = useSelector((state) => state.playerXTurnState.value)
  const winnerState = useSelector((state) => state.winnerState.value)

  const resetClick = () => {
    dispatch(resetBoard())
    dispatch(setTurn(true))
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe Games</h1>
      <p>by Elian Richard</p>
      <Board />
      <div className='description'>
        {
          (winnerState === 'draw') ? 
          <h2>The game is draw!</h2>
          : (!winnerState) ?
          <h2>Current Turn: {isTurnX ? 'X' : 'O'}</h2>
          : 
          <h2>The winner is {winnerState}</h2>
        }
        <button onClick={resetClick}>Reset</button>
      </div>
    </div>
  );
}

export default App;
