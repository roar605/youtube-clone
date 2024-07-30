import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import Header from './Header'
const Body = () => {
  return (
    <div className='p-2 '>
        <Header />
     
        <Outlet/>
    </div>
  )
}

export default Body