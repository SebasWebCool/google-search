import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Pagination from './Pagination'

const Imgs = ({ results, setSafeSearch, totalResults, setPage, safeSearch }) => {

  const handleSafeSearch = ()=>{
    setSafeSearch(!safeSearch)
    console.log(safeSearch);
  }

  console.log(results)
  console.log(totalResults)

  // if (results) {

    return (
      <section className='w-full flex flex-col justify-center align-middle'>
        <div className='w-full flex justify-start align-middle'>
          <span className='p-1 ml-4 mr-2'>Sefe Search</span>
          <button className='p-1 bg-blue-500 dark:bg-slate-600 cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {""+`${safeSearch}`} </button>
        </div>
        <ul className='w-full flex flex-wrap justify-center gap-4'>
          {
            results?.map((res, i) => 
            (
              res.url ?  
              <li className='b-gray-500 my-5 h-32 p-1 sm:h-64' key={i}>
                <a href={res.url}>
                  <img className='h-full'  src={res.url} alt="" />
                </a>
                {/* <h3>{res.title &&  res.title.length > 30 ? res.title.slice(0,20)+"..." : res.title }</h3> */}
                <a className='text-sm hover:underline cursor-pointer hover:text-teal-800' href={res.webpageUrl}>
                  {res.webpageUrl && res.webpageUrl.length > 30 ? res.webpageUrl.slice(0, 30) : res.webpageUrl}
                </a>
                <br/>
                <a className='hover:underline cursor-pointer hover:text-teal-800' href={res.webpageUrl}>
                  Go to the website
                </a>
              </li>
            : "" )
            )
          }
        </ul>
        <Pagination totalResults={totalResults} setPage={setPage} />

      </section>
    )
  // } else {
  //   return <Loading />
  // }
}

export default Imgs