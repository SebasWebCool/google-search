import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingTrue } from '../store/slice/isLoading.slice'
import { setTerm } from '../store/slice/term.slice'

const NavSearch = () => {

  const [valueNav, setValueNav] = useState()

  const dispatch = useDispatch()

  const term = useSelector((state) => state.termSlice)

  const handleTerm = (e) => {
    e.preventDefault()
    dispatch(setTerm(e.target.input.value.trim()))
    dispatch(setLoadingTrue())
  }
  useEffect(() => {
    setValueNav(term)
  }, [term])
  return (
    <div className='w-[600px] flex justify-center align-middle '>
      <form onSubmit={handleTerm} className='w-3/5 flex justify-center align-middle'>
        <input className='w-11/12 h-8 text-gray-900' type="text" name='a' id='input' defaultValue={valueNav} />
        <button className='w-1/12 h-8 dark:bg-slate-400 bg-blue-500'>🔍</button>
      </form>
    </div>
  )
}

export default NavSearch