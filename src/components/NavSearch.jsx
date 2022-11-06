import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFTrue } from '../store/slice/isFinished.slice'
import { setLoadingTrue } from '../store/slice/isLoading.slice'
import { setTerm } from '../store/slice/term.slice'

const NavSearch = () => {

  const dispatch = useDispatch()

  const term = useSelector((state) => state.termSlice)
  
  const handleTerm = (e)=>{
    e.preventDefault()
    const value = e.target.input.value.trim()
    dispatch(setTerm(value))
    dispatch(setLoadingTrue())
    console.log(term)
  }

  return (
    <div className='w-full flex justify-center align-middle '>
      <form onSubmit={handleTerm} className='w-3/5 flex justify-center align-middle'>
        <input className='w-11/12 h-8 text-gray-900' type="text" name='a' id='input' defaultValue={term} />
        <button className='w-1/12 h-8 bg-slate-400'>🔍</button>
      </form>  
    </div>
      )
}

export default NavSearch