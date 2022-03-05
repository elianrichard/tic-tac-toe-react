import boardReducer from '../features/board'
import playerXTurnReducer from '../features/playerXTurn'
import winnerReducer from '../features/winner'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer:{
    boardState: boardReducer,
    playerXTurnState: playerXTurnReducer,
    winnerState: winnerReducer,
  },
})

export default store 