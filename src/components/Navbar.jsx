import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFTrue } from '../store/slice/isFinished.slice'
import Loading from '../components/Loading'


const navbar = ({ setHome, darkTheme, setDarkTheme, setTypeSearch, typeSearch }) => {

  const t = useSelector(state => state.Isfinished)


  const dispatch = useDispatch()

  const goHome = () => {
    setHome(true)
  }

  const hadleSearch = () => {
    setTypeSearch('a')
    dispatch(setFTrue())
  }
  const hadleImages = () => {
    setTypeSearch('b')
    dispatch(setFTrue())
  }
  const hadleVideos = () => {
    setTypeSearch('c')
    dispatch(setFTrue())
  }
  const hadleNews = () => {
    setTypeSearch('d')
    dispatch(setFTrue())
  }
  console.log(t)
  // console.log(typeSearch);
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <a className='cursor-pointer' href="#" onClick={goHome}>
          <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
            Goggl 🔍
          </p>
        </a>
        <button className='text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1' onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 'Light ☀' : 'Dark 🌙'}
        </button>
      </div>
      <div className='py-3 w-screen'>
        <ul className='w-full flex justify-evenly align-middle'>
          <li className='hover:bg-slate-500 ease-out translate-y-2'>
            <a className='cursor-pointer ' onClick={hadleSearch}>
              <span className={typeSearch == 'a' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2':''}>
                🔍 Search
              </span>
            </a>
          </li>
          <li className='hover:bg-slate-500 ease-out translate-y-2'>
            <a className='cursor-pointer ' onClick={hadleImages}>
              <span className={typeSearch == 'b' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2':''}>
                📸 Images
              </span>
            </a>
          </li>
          <li className='hover:bg-slate-500 ease-out translate-y-2'>
            <a className='cursor-pointer ' onClick={hadleVideos}>
              <span className={typeSearch == 'c' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2':''}>
                🎥 Videos
              </span>
            </a>
          </li>
          <li className='hover:bg-slate-500 ease-out translate-y-2'>
            <a className='cursor-pointer ' onClick={hadleNews}>
              <span className={typeSearch == 'd' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2':''}>
                🧾 News
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar