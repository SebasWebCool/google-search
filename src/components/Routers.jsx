import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import Results from './Results'


const Routers = ({setHome,home,typeSearch}) => {

  const loading =useSelector(state => state.isLoading)

  return (
    <div className={home || loading ? 'h-[69vh] p-4' : 'p-4'}>

        {
          home ? 

          <Home setHome={setHome} />
          : 
          <Results typeSearch={typeSearch}/>

        }
    
    </div>
  )
}

export default Routers