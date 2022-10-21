import React from 'react'
import Loading from '../components/Loading'
const Imgs = ({ results }) => {

  // console.log(results)
  if(results){

    return (
      <div className='w-full flex flex-wrap gap-4 justify-center align-middle'>
        {
          results?.map(res => (
  
            <a className='w-3/12 dark:bg-slate-50' key={res} href={res}>
              <img className='w-full' src={res} alt="" />
            </a>
          ))
        }
  
      </div>
    )
  } else{
    return <Loading/>
  }
}

export default Imgs