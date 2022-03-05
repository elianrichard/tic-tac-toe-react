import React from 'react'
import Squares from './Squares'
import { useSelector, useDispatch } from 'react-redux'
import { changeWinner } from '../features/winner'
import { useEffect } from 'react'

const Board = () => {
  const dispatch = useDispatch()
  const boardStatus = useSelector((state) => state.boardState.value)

  useEffect(() => {
    function checkWinner(boardStateArr){
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]

      
      for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if (boardStateArr[a].value === boardStateArr[b].value && boardStateArr[b].value === boardStateArr[c].value && boardStateArr[a].value === boardStateArr[c].value) {
          return boardStateArr[a].value
        }
      }
      
      let count = 0;
      for (let i = 0; i < 9; i++){
        if (boardStateArr[i].value === 'X' || boardStateArr[i].value === 'O') count = count + 1
      }
      if (count === 9) return 'draw'
  
      return ''
    }
    
    dispatch(changeWinner(checkWinner(boardStatus.boxes)))
  }, [boardStatus, dispatch])

  return (
    <div className='board'>
      {boardStatus.boxes.map((square) => (
        <Squares key={square.id} id={square.id} value={square.value} />
      ))}
    </div>
  )
}

export default Board