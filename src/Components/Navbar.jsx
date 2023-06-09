import React from 'react'
import {
  Box, Button
} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: 'background.custom', height: '40px',display:'flex',justifyContent:"space-around",alignItems:'center' }}>
        <ul style={{ display: 'flex', alignItems: 'center', height: '40px', color: "#fff", gap: '20px', listStyle: 'none' }}>
          <li>
            <Link to='/' style={{ color: "#fff" }}>Home</Link>
          </li>
          <li>
            <Link to='/about' style={{ color: "#fff" }}>About</Link>
          </li>
          <li>
            <Link to='/service' style={{ color: "#fff" }}>Service</Link>
          </li>
        </ul>

        <Button style={{color:"#000"}}> Login </Button>
      </Box>
    </>
  )
}

export default Navbar