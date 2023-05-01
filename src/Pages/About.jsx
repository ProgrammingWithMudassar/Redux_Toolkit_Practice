import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const About = () => {

  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <Box sx={{ textAlign: 'center' }} mt={4}>
        <Typography variant="body1" color="initial">First Slice Data.</Typography>
        {count}
      </Box>
    </>
  )
}

export default About