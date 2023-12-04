import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideContainer = () => {
  const isMenu = useSelector((store)=>store.app.isMenu)
  // console.log(isMenu)
  
  if(!isMenu)return null;
  return (
    <section className='flex flex-col w-2/12 h-[52vh]'>
      <section>
        <ul>
          <Link to='/'>
          <li className='flex font-bold bg-gray-100 cursor-pointer justify-start h-12 rounded-xl p-2 items-center'>
            <svg className='w-7 mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
            </svg>
            Home
          </li>
          </Link>
          <li className='hover:bg-gray-100 font-bold flex cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
            <svg className='w-7 mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M 15.886719 1 C 14.974131 1 14.077693 1.2286385 13.287109 1.65625 L 5.5664062 5.7207031 L 5.5664062 5.71875 C 3.7637541 6.6652034 2.6367187 8.5322799 2.6367188 10.566406 C 2.6367188 11.911504 3.2225585 13.082394 4.046875 14.046875 C 3.2161002 15.0216 2.6367187 16.195885 2.6367188 17.521484 C 2.6367188 20.532674 5.1018215 23 8.1132812 23 C 9.0303925 23 9.9287625 22.773103 10.716797 22.341797 L 18.292969 18.353516 L 18.259766 18.369141 C 20.151702 17.459981 21.363281 15.531898 21.363281 13.433594 C 21.363281 12.088496 20.777441 10.917606 19.953125 9.953125 C 20.783897 8.9783946 21.363281 7.8041153 21.363281 6.4785156 C 21.363281 3.4673258 18.898179 1 15.886719 1 z M 15.886719 3 C 17.813259 3 19.363281 4.5517054 19.363281 6.4785156 C 19.363281 7.5499776 18.888956 8.5222239 18.080078 9.1777344 L 17.121094 9.9550781 L 18.080078 10.732422 C 18.871608 11.373406 19.363281 12.344494 19.363281 13.433594 C 19.363281 14.75529 18.584642 15.993566 17.392578 16.566406 L 17.376953 16.574219 L 9.7636719 20.583984 L 9.7578125 20.587891 C 9.2778524 20.850605 8.6961702 21 8.1132812 21 C 6.1867412 21 4.6367188 19.448295 4.6367188 17.521484 C 4.6367188 16.450022 5.1110438 15.477776 5.9199219 14.822266 L 6.8789062 14.044922 L 5.9199219 13.267578 C 5.1283915 12.626594 4.6367188 11.655506 4.6367188 10.566406 C 4.6367188 9.266533 5.3427459 8.095781 6.4960938 7.4902344 L 6.4980469 7.4902344 L 14.232422 3.4179688 L 14.238281 3.4140625 C 14.729251 3.1482632 15.309951 3 15.886719 3 z M 10 9 L 10 15 L 15 12 L 10 9 z"></path>
            </svg>
            Shorts
          </li>
          <li className='hover:bg-gray-100 font-bold flex cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
          <img className='w-7 mr-3' src="https://img.icons8.com/ios/100/video-playlist.png" alt="video-playlist"/>
            Subscriptions</li>
        </ul>
      </section>

      <br/>
      <hr className='w-11/12'/>
      <br/>

      <section>
        <ul>
          <li className='flex font-bold text-xl hover:bg-gray-100 cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
            You  
          </li>
          <li className='flex font-bold hover:bg-gray-100 cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
            <img className='w-7 mr-3' src="https://img.icons8.com/windows/96/name.png" alt="name"/>
            Your channel
          </li>
          <li className='hover:bg-gray-100 font-bold flex cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
            <img className='w-7 mr-3' src="https://img.icons8.com/ios/100/time-machine--v1.png" alt="time-machine--v1"/>
            History
          </li>
          <li className='hover:bg-gray-100 font-bold flex cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
            <svg className='w-7 mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
              <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path>
            </svg>
            Your videos
          </li>
          <li className='hover:bg-gray-100 font-bold flex cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
          <img className='w-7 mr-3' src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/96/external-history-ui-anggara-basic-outline-anggara-putra.png" alt="external-history-ui-anggara-basic-outline-anggara-putra"/>
            Watch Later
          </li>
          <li className='hover:bg-gray-100 font-bold flex cursor-pointer justify-start  h-12 rounded-xl p-2 items-center'>
          <img className='w-7 mr-3' src="https://img.icons8.com/ios/100/facebook-like--v1.png" alt="facebook-like--v1"/>
            Liked videos
          </li>
        </ul>
      </section>
    </section>
  )
}

export default SideContainer
