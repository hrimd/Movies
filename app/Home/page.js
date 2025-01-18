/* eslint-disable react/jsx-no-undef */
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
export default function Home() {
 //storing
  const [data ,setData] = useState([])
  //search
  const  [search , setSearch] = useState()
   
    useEffect(() => {
    fetchLatest()
  // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     const  fetchLatest = async () =>
       {
    const fetchMovies = await fetch (` http://www.omdbapi.com/?&s=${search}&apikey=c177e9e6`)
    const fetchData = await fetchMovies.json()
    console.log(fetchData.Search)
    setData(fetchData.Search)
     }




  return (
    <>
    <div className='bg-slate-600 flex justify-between items-center p-6 mx-6 rounded text-white '>
       <div className='text-xl font-bold text-sky-500'>
          <h3> Creativehub</h3>
       </div>
       <div className='flex'>
         <input type="text" placeholder='search..' value={search} onChange={(e) => setSearch(e.target.value) } className='rounded-s-md p-2.5 outline-none border-none text-sm text-black'/>
          <button onClick={fetchLatest } className='bg-white text-gray-900 rounded-e-md px-4 border-none outline-none '><IoIosSearch /></button>
       </div>
    </div>
     <div className='w-full  text-lg  py-8 '>
       <h1 className='mx-6 p-2 text-6xl  '>
        <span className='text-red-500 mx-3 hover:shadow-red-500 hover:shadow-xl hover:underline  p-2.5 bg-red-100  rounded-full '>M</span>
        <span className='text-blue-500 mx-3 hover:shadow-blue-500 hover:shadow-xl hover:underline  p-2.5 bg-blue-100  rounded-full '>o</span>
        <span className='text-purple-500 mx-3 hover:shadow-purple-500 hover:shadow-xl hover:underline  p-2.5 bg-purple-200  rounded-full '>v</span>
        <span className='text-yellow-500 mx-3 hover:shadow-yellow-500 hover:shadow-xl hover:underline  p-2.5 bg-yellow-100  rounded-full '>i</span>
        <span className='text-green-500 mx-3 hover:shadow-green-500 hover:shadow-xl hover:underline  p-2.5 bg-green-100  rounded-full '>e</span>
        <span className='text-pink-300 mx-3 hover:shadow-pink-500 hover:shadow-xl hover:underline  p-2.5 bg-pink-100  rounded-full '>s</span>
          </h1>
    </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 text-gray-200  p-4 bg-slate-900'>
          {
           data.length >0 &&  data.map((curElm, key) => (
             <div  key={key}>
              <img className='bg-black  shadow-gray-900 shadow-md rounded-md' src={curElm.Poster} alt='logo'  width="300px" height="400px" />
               <div className='w-full flex flex-col bg-700 mt-1'>
                <h2 className='text-red-500 font-semibold ' >Title:-  <Link className='text-blue-700' href={curElm.Title}>{curElm.Title} </Link> </h2>
                 <h3 className='text-red-500 font-semibold flex gap-2' >Type:- <p  className='text-green-500'>{curElm.Type} </p></h3>
              <h3 className='text-red-500 font-semibold flex gap-2 ' >Year:-    <p className='text-green-500'>{curElm.Year} </p>  </h3>
            </div>
           </div>
          ))
        }
     </div>
    </>
  )
}





