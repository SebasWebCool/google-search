import React, { useState } from 'react'

const Pagination = ({ results, setCurrentPage, totalPages }) => {
  console.log(results);
  
  const [selectPage, setselectPage] = useState(1)

  // console.log(totalPages)
  const array = []
  for (let i = 1; i <= totalPages; i++) {
    array.push(i)
  }

  const handlePage = (i)=>{
    setCurrentPage(i)
    setselectPage(i)
  }

  return (
    <div className='w-full pt-5'>
      <ul className='flex w-full justify-center gap-2 '>
        {
          array.map(num => (
            <li key={num}>
              <p className={
                selectPage != num ? 'p-2 dark:bg-slate-400 bg-blue-500 cursor-pointer rounded'
                :`p-2 bg-slate-900 cursor-pointer text-gray-200 rounded`
                } 
              onClick={()=>handlePage(num)}>
                {num}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination