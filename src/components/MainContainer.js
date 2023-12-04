import React from 'react'
import ButtonsContainer from './ButtonsContainer'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const isMenu = useSelector((store)=>store.isMenu)
  return (
    <div className={isMenu?"ml-5 flex flex-col w-10/12":"ml-5 flex flex-col w-full"}>
      <ButtonsContainer/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
