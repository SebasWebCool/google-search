import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFTrue } from '../store/slice/isFinished.slice'
const navbar = ({darkTheme ,setDarkTheme,setTypeSearch ,typeSearch}) => {

  const dispatch= useDispatch()

  const hadleSearch =()=>{
    setTypeSearch('a')
    dispatch(setFTrue)
  }
  const hadleImages =()=>{
    setTypeSearch('b')
    dispatch(setFTrue)
  }
  const hadleVideos =()=>{
    setTypeSearch('c')
    dispatch(setFTrue)
  }
  const hadleNews =()=>{
    setTypeSearch('d')
    dispatch(setFTrue)
  }

  // console.log(typeSearch);
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to={'/'}>
          <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
            Goggl 🔍
          </p>
        </Link>
        <button className='text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1' onClick={()=> setDarkTheme(!darkTheme)}>
            {darkTheme ? 'Light ☀' : 'Dark 🌙'}
        </button>
      </div>
      <div className='py-3 w-screen'>
        <ul className='w-full flex justify-evenly align-middle'>
          <li>
              <a onClick={hadleSearch}>
                <span>
                  Search
                </span>
              </a>
          </li>
          <li>
              <a onClick={hadleImages}>
                <span>
                  Images
                </span>
              </a>
          </li>
          <li>
              <a onClick={hadleVideos}>
                <span>
                  Videos
                </span>
              </a>
          </li>
          <li>
              <a onClick={hadleNews}>
                <span>
                  News
                </span>
              </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar