import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavSearch from './NavSearch'
import { setLoadingTrue } from '../store/slice/isLoading.slice'


const navbar = ({ home, setHome, darkTheme, setDarkTheme, setTypeSearch, typeSearch }) => {

  const dispatch = useDispatch()

  const goHome = () => {
    setHome(true)
  }

  const hadleSearch = () => {
    dispatch(setLoadingTrue())
    setTypeSearch('a')
  }
  const hadleImages = () => {
    dispatch(setLoadingTrue())
    setTypeSearch('b')
  }
  const hadleVideos = () => {
    dispatch(setLoadingTrue())
    setTypeSearch('c')
  }
  const hadleNews = () => {
    dispatch(setLoadingTrue())
    setTypeSearch('d')
  }

  return (
    <div className='sm:h-[15vh] pt-5 w-full flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>

      <div className='flex  justify-between px-3 min-[885px] items-center w-screen'>
          <a className='cursor-pointer' href="#" onClick={goHome}>
            <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
              Wobble 🔍
            </p>
          </a>
          <div className='justify-center w-8/12 hidden sm:flex'>

          {
            home ? '' : <NavSearch />
          }
          </div>
          <button className='text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1' onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? 'Light ☀' : 'Dark 🌙'}
          </button>
      </div>
          <div className='sm:hidden flex justify-center align-middle w-full pt-5'>
            {
               home ? '' : <NavSearch />
            }
          </div>

      <div className='py-3 w-screen'>
        <ul className='w-full flex justify-evenly align-middle'>
          <li className=''>
            <a className='ease-out  hover:translate-y-2 cursor-pointer ' onClick={hadleSearch}>
              <span className={typeSearch == 'a' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2' : ''}>
                🔍 Search
              </span>
            </a>
          </li>
          <li className=''>
            <a className=' ease-out  hover:translate-y-2 cursor-pointer ' onClick={hadleImages}>
              <span className={typeSearch == 'b' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2' : ''}>
                📸 Images
              </span>
            </a>
          </li>
          <li className=''>
            <a className=' ease-out  hover:translate-y-2 cursor-pointer ' onClick={hadleVideos}>
              <span className={typeSearch == 'c' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2' : ''}>
                🎥 Videos
              </span>
            </a>
          </li>
          <li className=''>
            <a className='ease-out  hover:translate-y-2 cursor-pointer ' onClick={hadleNews}>
              <span className={typeSearch == 'd' ? 'text-blue-700 border-b-2 dark:text-blue-200  border-blue-700 pb-2' : ''}>
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