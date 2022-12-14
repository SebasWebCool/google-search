import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoadingTrue } from '../store/slice/isLoading.slice'

const Pagination = ({ setPage, totalResults ,page}) => {


  const dispatch = useDispatch()

  // console.log(page);

  let pageNumber = totalResults && Math.ceil(totalResults / 50)

  let arrayPage = []

  for (let i = 1; i <= pageNumber; i++) {
    arrayPage.push(i)
  }


  const handlePage = (i) => {
    setPage(i)
    dispatch(setLoadingTrue())
  }
  useEffect(()=>{

  },[page])

  return (

    <div className='w-full pt-5'>

      <ul className='w-full flex flex-wrap gap-1  justify-center align-middle'>
        {
          arrayPage.map((i) => (

            <li key={i} className='mt-5' >
              <span onClick={() => handlePage(i)} className={
                page != i ? 'p-2 dark:bg-slate-400 bg-blue-500 cursor-pointer rounded'
                  : `p-2 bg-slate-900 cursor-pointer text-gray-200 rounded`
              } >
                {i}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination