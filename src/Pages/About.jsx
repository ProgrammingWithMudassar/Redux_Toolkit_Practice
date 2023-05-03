import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useGetAllPostsQuery } from '../Features/api/Pokemon.js'


const About = () => {

  var respInfo = useGetAllPostsQuery();
  const count = useSelector((state) => {
    return ({
      firstCounter: state.PersistedReducer.counter,
      secondCounter: state.PersistedReducer.SecondCounter,
      thirdCounter: state.PersistedReducer.ThirdCounter,
    })
  })

  return (
    <>
    
      <Box sx={{ textAlign: 'center' }} mt={4}>
      <Typography variant="body1" color="initial">{respInfo.data[0].title}</Typography> 
        <Typography variant="body1" color="initial">First Slice Data.</Typography>
        {count.firstCounter.value}
      </Box>
    </>
  )
}

export default About