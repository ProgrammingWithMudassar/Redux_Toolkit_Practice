import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ThirdNum: 3,
  name:"Third Slice"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    minus: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ThirdNum += 1
    },
    add: (state) => {
      state.ThirdNum -= 1
    },
    incrementByAmount: (state, action) => {
      state.ThirdNum += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { minus, add, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer