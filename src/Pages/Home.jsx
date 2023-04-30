import React from 'react'
import {
  Box, Button
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Features/Counter/CounterSlice'



const Home = () => {

  const count = useSelector((state) => {
    console.log(state);
    return (
      state.counter
    )
  })
  const dispatch = useDispatch();

  const Minus = () => {
    dispatch(decrement());
  }
  const Add = () => {
    dispatch(increment());
  }

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 4 }}>

        <Button sx={{ color: '#000', mr: 4 }} onClick={Minus}>-</Button>
        <span>{count.value}</span>
        <Button sx={{ color: '#000', ml: 4 }} onClick={Add}>+</Button>
      </Box>
    </>
  )
}

export default Home