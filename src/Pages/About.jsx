import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation
} from '../Features/api/Pokemon.js'




const About = () => {
  const count = useSelector((state) => {
    return ({
      firstCounter: state.PersistedReducer.counter,
      secondCounter: state.PersistedReducer.SecondCounter,
      thirdCounter: state.PersistedReducer.ThirdCounter,
    })
  })



  // var respInfo = useGetAllPostsQuery();
  // var respInfo = useGetPostByIdQuery(5);
  var respInfo = useGetPostByLimitQuery(2);
  var [deletePost, info] = useDeletePostMutation();


  console.log("data", info.data);
  console.log("Success", info.isSuccess);



  if (respInfo.isLoading) return <div> Loading...</div>
  if (respInfo.isError) return <div> An Error is ocured. Please try after someTime...</div>
  if (respInfo.isSuccess)
    return (
      <>

        {/* This is fetching all the data  */}

        {/* {
        respInfo.data.map((post,i) => {
          return (
            <Box key={post.id}>
              <Typography variant="h6" style={{ marginTop: '0.5rem' }}><span style={{fontWeight:'600'}}>{post.id}.</span> {post.title}</Typography>
              <Typography variant="body1" color="initial">{post.body}</Typography>
            </Box>
          )
        })
      } */}

        {/* that is fetching only specific data. */}
        <Typography variant="body1" color="initial">Body of data: {respInfo.data.body}</Typography>


        {/* That is getting limited data. */}
        {/* {
          respInfo.data.map((post, i) => {
            return (
              <Box key={post.id}>
                <Typography variant="h6" style={{ marginTop: '0.5rem' }}><span style={{ fontWeight: '600' }}>{post.id}.</span> {post.title}</Typography>
                <Typography variant="body1" color="initial">{post.body}</Typography>
              </Box>
            )
          })
        } */}


        <button style={{ padding: '10px'}} onClick={()=>{deletePost(1)}}>Delete Button</button>

      </>
    )
}

export default About