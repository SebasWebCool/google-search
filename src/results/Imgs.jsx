import React from 'react'

const Imgs = ({ results }) => {

  // console.log(results)
  return (
    <div className='w-full flex flex-wrap gap-4 justify-center align-middle'>
      {
        results?.map(res => (

          <a className='w-3/12' key={res} href={res}>
            <img className='w-full' src={res} alt="" />
          </a>
        ))
      }

    </div>
  )
}

export default Imgs