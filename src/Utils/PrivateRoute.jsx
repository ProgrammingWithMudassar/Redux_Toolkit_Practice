import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  let isLoggedIn = false;

  if (isLoggedIn) {
    return <Outlet />
  }
  else {
    useEffect(() => {
      alert("Please login");
    }, [])
    return (
      <>
        <Navigate to={'/'} />
      </>
    )
  }
}

export default PrivateRoute