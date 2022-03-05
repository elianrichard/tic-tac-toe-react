import { createSlice } from '@reduxjs/toolkit'
import boardInitial from './boardInitial'

export const boardSlice = createSlice({
  name: 'board',
  initialState: { value: boardInitial },
  reducers: {
    buttonClick: (state, action) => {
      state.value.boxes = state.value.boxes.map((box) => box.id === action.payload.id ? {...box, value: action.payload.value} : box)
      // console.log(action.payload)
    },
    disableBoard: (state) => {
      state.value.boxes = state.value.boxes.map((box) => (box.value !== 'X' && box.value !== 'O') ? {...box, value: '-'} : box)
    },
    resetBoard: (state) => {
      state.value = boardInitial
    }
  }
})

export const { buttonClick, disableBoard, resetBoard } = boardSlice.actions
export default boardSlice.reducer