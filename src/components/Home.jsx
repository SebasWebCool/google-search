import React from 'react'
import { useDispatch } from 'react-redux'
import { setLoadingTrue } from '../store/slice/isLoading.slice'
import { setTerm } from '../store/slice/term.slice'

const Home = ({ setHome }) => {

  const dispatch = useDispatch()

  const handleTerm = (e) => {
    e.preventDefault()
    dispatch(setLoadingTrue())
    dispatch(setTerm(e.target.s.value.trim()))
    setHome(false)
  }

  return (
    <div className='flex justify-center align-middle p-3 flex-col py-12 px max-w-2xl m-auto'>
      <h1 className='text-center py-10 text-5xl bg-blue-500 font-bold text-white px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
        Wobble
      </h1>
      <form onSubmit={handleTerm} className='w-full pt-8 flex justify-center align-middle'>
        <input className='w-11/12 h-8 text-gray-900' type="text" id='s' placeholder={' '+'Search'} />
        <button className='w-1/12 bg-blue-500 h-8 dark:bg-slate-400'>🔍</button>
      </form>
    </div>
  )
}

export default Home