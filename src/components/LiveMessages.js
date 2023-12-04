import React from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";

const LiveMessages = ({name,message}) => {
  return (
    <div className=' rounded-md flex items-center mb-2 shadow-sm hover:bg-slate-200'>
      <IoPersonCircleSharp className='text-2xl'/>
      <p className='font-bold text-slate-600 px-2 capitalize text-sm'>{name}</p>
      <p className=' font-semibold'>{message}</p>
    </div>
  )
}

export default LiveMessages
