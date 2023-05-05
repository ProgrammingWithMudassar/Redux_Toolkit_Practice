import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  let isLoggedIn = false;

  if(isLoggedIn){
    return <Outlet />
  }
  else {
    return (
      <>
      {
        alert("please first login")
      }
      <Navigate to={'/'} />
      </>
  )
}
}

export default PrivateRoute