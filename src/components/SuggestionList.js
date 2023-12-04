import React from 'react'

const SuggestionList = ({suggestionList}) => {
  return (
    <div>
      {
        suggestionList.map((sInfo)=>(
            <p key={sInfo} className=' p-1 rounded-md mb-1 cursor-pointer hover:bg-gray-50'>{sInfo}</p>
        ))
      }
    </div>
  )
}

export default SuggestionList
