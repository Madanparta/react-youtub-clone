import React, { useEffect } from 'react'
import LiveMessages from './LiveMessages'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/liveSlice';
import { randomMessage, rangomPersonName } from '../utils/helper';

const LiveChart = () => {
    const dispatch = useDispatch();
    const liveMessageSelecter = useSelector((store)=>store.chart.message);
    useEffect(()=>{
        const i = setInterval(()=>{
            // console.log("web soket ")
            dispatch(addMessage({
                name: rangomPersonName(),
                message: randomMessage(),
            }))
        },1500)

        return ()=> clearInterval(i)
    },[]);
  return (
    <div className=''>
        {
            liveMessageSelecter.map((c,i)=>(
                <LiveMessages key={i} name={c.name} message={c.message}/>
            ))
        }
    </div>
  )
}

export default LiveChart
