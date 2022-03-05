import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buttonClick, resetBoard } from '../features/board'
import { changeTurn, setTurn } from '../features/playerXTurn'

const Squares = ({ id, value }) => {
  const dispatch = useDispatch()
  const isTurnX = useSelector((state) => state.playerXTurnState.value)
  const winnerState = useSelector((state) => state.winnerState.value)

  const squareClick = () => {
    if (!winnerState){
      dispatch(buttonClick({id: id, value: isTurnX ? 'X' : 'O'}))
      dispatch(changeTurn())
    } else {
      dispatch(setTurn(true))
      dispatch(resetBoard())
    }
  }

  return (
    <button onClick={((value === 'X' || value === 'O') && !winnerState ) ? () => alert('That square has been filled!') : squareClick}>{value}</button>
  )
}

export default Squares