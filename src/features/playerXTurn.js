import { createSlice } from '@reduxjs/toolkit'

export const playerXTurnSlice = createSlice({
  name: 'playerXTurn',
  initialState: { value: true },
  reducers: {
    changeTurn: (state) => {
      state.value = !state.value
    },
    setTurn: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeTurn, setTurn } = playerXTurnSlice.actions
export default playerXTurnSlice.reducer