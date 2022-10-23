import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Htmls from '../results/Htmls'
import Home from './Home'
import Results from './Results'
import Search from './Search'


const Routers = ({setHome,home,typeSearch, setTypeSearch,setResults,results}) => {


  const term = useSelector(state => state.termSlice)


  console.log(results)
  return (
    <div className='p-4 h-full'>

      <Search typeSearch={typeSearch} results={results} setResults={setResults} />
      <Routes>
        {
          home ? 
          <Route path='/' element={<Home setHome={setHome} />} />
          :
          <Route path='/' element={<Results typeSearch={typeSearch} results={results?.data} suggestion={results?.data.people_also_ask}/>}/>

        }
    
      </Routes>
    </div>
  )
}

export default Routers