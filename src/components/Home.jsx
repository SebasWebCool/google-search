import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect } from 'react-router-dom'
import { setFTrue } from '../store/slice/isFinished.slice'
import { setTerm } from '../store/slice/term.slice'

const Home = () => {

  const isFinished = useSelector((state) => state.Isfinished)
  const dispatch = useDispatch()

  const term = useSelector((state) => state.termSlice)
  
  const handleTerm = (e)=>{
    e.preventDefault()
    const value = e.target.s.value.trim()
    dispatch(setTerm(`\"${value}"`))
    dispatch(setFTrue())
    console.log(term);
    console.log(isFinished)

  }

  console.log(isFinished)

  return (
    <div className='dark:bg-slate-800 flex justify-center align-middle p-3 flex-col h-full'>
      <h1 className='py-10 text-5xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
        Goggl
      </h1>
      <form onSubmit={handleTerm} className='w-full pt-8 flex justify-center align-middle'>
        <input className='w-11/12 h-8' type="text" id='s' placeholder='Search' />
        <button className='w-1/12 h-8 bg-slate-400'>🔍</button>
      </form>
    </div>
  )
}

export default Home