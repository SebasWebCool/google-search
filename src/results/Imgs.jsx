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

  if (results) {

    return (
      <section className='w-full flex flex-col justify-center align-middle'>
        <div className='w-full flex justify-start align-middle'>
          <span className='p-1 ml-4 mr-2'>Sefe Search</span>
          <button className='p-1 bg-slate-600 cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {""+`${safeSearch}`} </button>
        </div>
        <ul className='w-full flex flex-wrap gap-4 justify-center'>
          {
            results?.map((res, i) => (
              <li className='bg-gray-500 w-4/12 p-1 sm:w-3/12' key={i}>
                <a className='text-sm' href={res.webpageUrl}>
                  {res.webpageUrl.length > 30 ? res.webpageUrl.slice(0, 30) : res.webpageUrl}
                </a>
                <a href={res.url}>
                  <img className='w-full' src={res.url} alt="" />
                </a>
                <h3>{res.title}</h3>
              </li>
            ))
          }
        </ul>
        <Pagination totalResults={totalResults} setPage={setPage} />

      </section>
    )
  } else {
    return <Loading />
  }
}

export default Imgs