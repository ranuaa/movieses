import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../componennts/NavBar'

export const LayOut = () => {
  return (
    <div>
        <Outlet />
        <NavBar />
    </div>
  )
}

export default LayOut
