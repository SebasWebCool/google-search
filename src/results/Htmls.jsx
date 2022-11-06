import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { setFTrue } from '../store/slice/isFinished.slice'
import { setTerm } from '../store/slice/term.slice'
import Pagination from './Pagination'

const htmls = ({ results, setSafeSearch, similarSearch, totalResults, setPage, safeSearch}) => {

  const dispatch = useDispatch()  

  const term = useSelector(state => state.termSlice)


  const handleSafeSearch = ()=>{
    setSafeSearch(!safeSearch)
    console.log(safeSearch);
  }
  
  console.log(results)
  console.log(safeSearch)

    return (
      <div className='p-6 flex flex-col justify-start align-middle'>
        <div className='w-full flex justify-start align-middle'>
          <span className='text-xl p-1 ml-4 mr-2'>Sefe Search</span>
          <button className='bg-blue-500 dark:bg-slate-600 text-xl p-1  cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {safeSearch && ""+`${safeSearch}`} </button>
        </div>

        <section className='px-2'>
          <h3 className='text-xl pb-2'>
            Similar Search
          </h3>
           <ul className='flex flex-wrap gap-2 py-7'>
            {
              similarSearch == false ? <p className="text-center text-lg">No similar questions</p>
                : similarSearch?.map((sugges, i) => (
                  <li className='px-3' key={i}>
                    <a className='hover:underline cursor-pointer' onClick={() => {
                      dispatch(setTerm(sugges))
                      }}
                    >
                      <p>
                        {sugges.replaceAll('</b>', '').replaceAll('<b>','')}
                      </p>
                    </a>
                  </li>
                ))
            }
          </ul> 
        </section>
        <main className='flex flex-wrap justify-between align-middle space-y-6 sm:px-5'>
          {
            results?.map((res,i) => (
              <section key={i} className='md:w-2/5 w-full'>
                  <p className='text-sm'>
                    {res.datePublished}
                  </p>
                <a href={res.url} target="_blank">
                  <p className='text-sm'>
                    {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                  </p>
                </a>
                <a href={res.url}>
                  <h2 className='text-lg hover:underline dark:text-blue-300 text-blue-700 '>{res.title}</h2>
                </a>
                <p className='w-full text-justify'>{res.description.length > 200 ? res.description.slice(0,100) : res.description}</p>
              </section>
            ))
          }
        </main>
        <Pagination totalResults={totalResults} setPage={setPage} />
      </div>)

}

export default htmls