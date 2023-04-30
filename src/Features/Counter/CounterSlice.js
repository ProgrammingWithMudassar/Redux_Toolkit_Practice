import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  name:"First Slice"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      let StateValue = state.value;
      {
      StateValue>=1  ? state.value -= 1  : alert("You can't reduce the number more.")
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer