import React from 'react'
import {
  Box, Button, Typography
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Features/Counter/CounterSlice'
import { SecPlus, SecMinus } from '../Features/Counter/SecondarySlice'
import { minus, add } from '../Features/Counter/ThirdSlice'


const Home = () => {
  const count = useSelector((state) => {
    return ({
      firstCounter: state.counter,
      secondCounter: state.SecondCounter,
      thirdCounter: state.ThirdCounter,
    })
  })
  const dispatch = useDispatch();

//First
  const Minus = () => {
    dispatch(decrement());
  }
  const Add = () => {
    dispatch(increment());
  }
//second
  const MinusSec = () => {
    dispatch(SecMinus());
  }
  const AddSec = () => {
    dispatch(SecPlus());
  }
//Third
  const MinusTrd = () => {
    dispatch(minus());
  }
  const AddTrd = () => {
    dispatch(add());
  }
  //Reset All
  const ClearAll =()=>{
    localStorage.clear();
    location.reload();
  }

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1" color="initial">Frist Slice</Typography>
        <Button sx={{ color: '#000', mr: 4 }} onClick={Minus}>-</Button>
        <span>{count.firstCounter.value}</span>
        <Button sx={{ color: '#000', ml: 4 }} onClick={Add}>+</Button>
        <br />

        <Box mt={6}>
          <Typography variant="body1" color="initial">Second Slice</Typography>
          <Button sx={{ color: '#000', mr: 4 }} onClick={MinusSec}>-</Button>
          <span>{count.secondCounter.secondNum}</span>
          <Button sx={{ color: '#000', ml: 4 }} onClick={AddSec}>+</Button>
          <br />
        </Box>

        <Box mt={6}>
          <Typography variant="body1" color="initial">Third Slice</Typography>
          <Button sx={{ color: '#000', mr: 4 }} onClick={MinusTrd}>-</Button>
          <span>{count.thirdCounter.ThirdNum}</span>
          <Button sx={{ color: '#000', ml: 4 }} onClick={AddTrd}>+</Button>
          <br />
        </Box>
        <Button sx={{ color: '#000', mt: 4 }} onClick={ClearAll}>Reset All</Button>
      </Box>
    </>
  )
}

export default Home