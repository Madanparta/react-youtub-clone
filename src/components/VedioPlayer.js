import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { colaps } from '../utils/burgerMenuSlice';
import LiveChart from './LiveChart';
import { MdSend } from "react-icons/md";
import { addMessage } from '../utils/liveSlice';

const VedioPlayer = () => {
  const [liveMessage,setLiveMessage]=useState("")
    const [searchParams] = useSearchParams()
    // console.log(searchParams)

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(colaps())
    },[])

    // console.log(liveMessage)
  return (
    <div className='my-2 p-2 flex w-full'>
      <div className=" mx-16">
        <iframe
        className='rounded-xl'
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=Gx8TyS9aO6_abWsq`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>  
      </div>

      <div className='ml-10 h-[600px]'>
        <div className='h-[550px] w-96 rounded-t-xl p-6 bg-slate-100 flex overflow-y-scroll flex-col-reverse'>
            <LiveChart/>
        </div>
        <div className='h-[50px] rounded-b-xl  w-full border'>
          <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
              name:"Madan k",
              message:liveMessage,
            }))
            setLiveMessage('')
          }} className='w-full h-full flex justify-center items-center'>
            <input className='border-b-2 w-[80%] px-2 py-1 focus:outline-none' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} type='text'/>
            <MdSend onClick={()=>{
              dispatch(addMessage({
                name:"Madan k",
                message:liveMessage,
              }))
              setLiveMessage('')
            }} className='cursor-pointer text-xl' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default VedioPlayer
