import React from 'react'
import Loading from '../components/Loading'
import Pagination from './Pagination'
const Imgs = ({ results, totalPages, setCurrentPage }) => {

  // console.log(results)
  if(results){

    return (
      <div className='w-full flex flex-wrap gap-4 justify-center align-middle'>
        {
          results?.map((res,i) => (
  
            <a className='w-3/12 ' key={i} href={res}>
              <img className='w-full' src={res} alt="" />
            </a>
          ))
        }
        <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} results={results}/>

      </div>
    )
  } else{
    return <Loading/>
  }
}

export default Imgs