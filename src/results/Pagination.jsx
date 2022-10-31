import React, { useState } from 'react'

const Pagination = ({  setPage, totalResults }) => {

  const [selectPage, setselectPage] = useState(1)

  // console.log(totalPages)
  let pageNumber = totalResults && Math.ceil(totalResults / 50)
  let arrayPage = []
  for (let i = 1; i <= pageNumber; i++) {
    arrayPage.push(i)
  }


  const handlePage = (i) => {
    setPage(i)
    setselectPage(i)
  }

  return (
    
      <div className='w-full pt-5'>

        <ul className='w-full flex  justify-center align-middle'>
          {
            arrayPage.map((i) => (

              <li key={i} >
                <span onClick={() => handlePage(i)} className={
                  selectPage !=  i ? 'p-2 dark:bg-slate-400 bg-blue-500 cursor-pointer rounded'
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