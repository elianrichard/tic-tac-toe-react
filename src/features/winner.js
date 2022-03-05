import { createSlice } from '@reduxjs/toolkit'

export const winnerSlicce = createSlice({
  name: 'winner',
  initialState: { value: '' },
  reducers: {
    changeWinner: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeWinner } = winnerSlicce.actions
export default winnerSlicce.reducer