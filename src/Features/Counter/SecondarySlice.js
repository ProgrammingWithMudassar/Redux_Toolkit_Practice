import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  secondNum: 2,
  name:"Second Slice"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SecPlus: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.secondNum += 1
    },
    SecMinus: (state) => {
      state.secondNum -= 1
    },
    incrementByAmount: (state, action) => {
      state.secondNum += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SecPlus, SecMinus, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer