import React from 'react'
import SideContainer from './SideContainer'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex p-2'>
      <SideContainer/>
      {/* <MainContainer/> */}
      <Outlet/>
    </div>
  )
}

export default Body
