import React from 'react'
import NavBar from '../pages/Shared/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import TopBar from '../pages/Shared/TopBar/TopBar'

const Main = () => {
  return (
    <div>   
      <TopBar />    
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main