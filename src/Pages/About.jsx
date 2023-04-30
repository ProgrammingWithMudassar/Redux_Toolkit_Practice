import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'

const About = () => {

  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <Box sx={{ textAlign: 'center' }} mt={4}>
        {count}
      </Box>
    </>
  )
}

export default About