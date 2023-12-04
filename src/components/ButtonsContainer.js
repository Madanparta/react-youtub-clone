import React from 'react'

const ButtonsContainer = () => {
  const buttons = [
    "All",
    "JavaScript",
    "Mixes",
    "Music",
    "Gaming",
    "Stream",
    "Computers",
    "Editing",
    "Beauty",
    "Data Structures",
    "Live",
    "Racing video games",
    "Asian music"
  ];
  
  return (
    <div className='py-2 mt-1 px-3 h-11 flex items-center'>
      {
        buttons.map((btn)=>(
          <button key={btn} className='py-1 px-4 rounded-lg border text-white hover:bg-[#414040fa] font-bold bg-[#272727]'>{btn}</button>
        ))
      }
    </div>
  )
}

export default ButtonsContainer
