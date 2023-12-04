import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {YOUTUB_API} from '../utils/constant'
import Vedios from './Vedios';
import { Link } from 'react-router-dom';


const VideoContainer = () => {

  const [vData,setVData]=useState([])

  useEffect(()=>{
    YoutubeApi()
  },[])

  const YoutubeApi = async ()=>{
    const data =await axios.get(YOUTUB_API)
    setVData(data?.data?.items)
  }
  // console.log(vData)
  return (
    <div className='flex w-full flex-wrap mt-2'>
      {
        vData.map((data)=>(
          <Link to={"watch?v="+data.id} key={data.id} ><Vedios data={data}/></Link>
        ))
      }
    </div>
  )
}

export default VideoContainer
