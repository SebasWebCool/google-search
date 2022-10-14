import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Htmls from '../results/Htmls'
import Home from './Home'
import Results from './Results'
import Search from './Search'


const Routers = ({typeSearch, setTypeSearch}) => {

 
  const [results, setResults] = useState()


  const term = useSelector(state => state.termSlice)


  console.log(results)
  return (
    <div className='p-4 h-full'>

      <Search typeSearch={typeSearch} results={results} setResults={setResults} />
      <Routes>
        {
          term ? 
          <Route path='/' element={<Results typeSearch={typeSearch} results={results?.data} suggestion={results?.data.people_also_ask}/>}/>
          :
          <Route path='/' element={<Home />} />

        }
    
      </Routes>
    </div>
  )
}

export default Routers