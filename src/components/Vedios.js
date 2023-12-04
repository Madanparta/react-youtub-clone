import React from 'react'


const Vedios = ({data}) => {
    const {localized ,thumbnails,channelTitle} = data.snippet;
    const {likeCount,viewCount} = data.statistics;
  return (
    <div className='shadow-md rounded cursor-pointer hover:shadow-none w-80 p-2 m-3'>
      <img className='rounded-xl' src={thumbnails.medium.url} alt='vedios'/>
      <h2 className='font-bold'>{localized.title}</h2>
      <p className='font-light text-slate-400'>{channelTitle}</p>
      <p className='font-light text-slate-400'><span>{viewCount} views</span></p>
    </div>
  )
}

export default Vedios
