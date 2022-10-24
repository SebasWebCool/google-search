import React from 'react'
import { Audio } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full '>
      <Audio
        height="100"
        width="100"
        radius="9"
        color='green'
        ariaLabel='three-dots-loading'
      />
      <p className='text-xl text-center'>Loading</p>
    </div>
  )
}

export default Loading