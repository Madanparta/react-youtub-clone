import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../utils/burgerMenuSlice';
import axios from "axios";
import {YOUTUB_SEARCH_SUGGESTION} from "../utils/constant";
import SuggestionList from './SuggestionList';
import { cachingSearch } from '../utils/searchSlice';

const Header = () => {

  const [search,setSearch]=useState("");
  const [suggestionList,setSuggestionList]=useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false)

  const dispatch = useDispatch()
  const handlingSideBar = () => {
    dispatch(toggle())
  }

  const searchChashe = useSelector(store=>store.search);
  // console.log(searchChashe)

  useEffect(()=>{
    const searchTimeout = setTimeout(()=>{
      if(searchChashe[search]){
        setSuggestionList(searchChashe[search]);
      }else{
        SearchHandling()
      }
      // SearchHandling()
    },200)

    return ()=>{
      clearInterval(searchTimeout)
    }
  },[search]);

  const SearchHandling = async () => {
    const searchData = await axios.get(YOUTUB_SEARCH_SUGGESTION+search);
    // console.log(searchData.data[1])
    setSuggestionList(searchData.data[1])
    setShowSuggestion(true)

    dispatch(
      cachingSearch({
        [search]:searchData.data[1]
      })
    )
  }
  // console.log(search)
  return (
    <>
    <header className='grid grid-flow-col shadow p-3 sticky top-0 left-0 z-10 bg-white'>

      <section className='flex pl-2 '>
        <svg onClick={()=>handlingSideBar()} className='cursor-pointer w-7 h-10 mr-7' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>

        <div className='flex cursor-pointer  justify-center items-center'>
            <svg className='w-10 h-10 font-extrabold' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
            <h1 className='font-bold text-xl tracking-tight'>YouTube<sup className='font-light text-sm'>TN</sup></h1>
        </div>
      </section>

      <section className='flex flex-col relative'>
        <div className='flex justify-center items-center'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' className='border outline-none w-10/12 h-10 py-2 px-4 rounded-l-full' type='text'/>
          <svg className='cursor-pointer w-16 border h-10 px-4 rounded-r-full bg-gray-50' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </div>
        {showSuggestion && <div className='absolute top-11 p-1 left-8 shadow-sm w-5/6 rounded-lg bg-white'>
          <SuggestionList suggestionList={suggestionList}/>
        </div>}
      </section>

      <section className='pr-2 flex justify-end items-center'>
        <img className='cursor-pointer w-10' src="https://img.icons8.com/ios-glyphs/30/user-male-circle.png" alt="user-male-circle"/>
      </section>
    </header>
    </>
  )
}

export default Header
