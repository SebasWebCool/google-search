import React from 'react'
import Loading from '../components/Loading'
import Pagination from './Pagination';

const News = ({ results, setSafeSearch, totalResults, setPage, safeSearch}) => {

  console.log(results);


  const handleSafeSearch = ()=>{
    setSafeSearch(!safeSearch)
    console.log(safeSearch);
  }

  // if (results) {

    return (
      <section className=' flex flex-wrap justify-between items-center space-y-6 sm:px-10'>
        <div className='w-full flex justify-start align-middle'>
          <span className='p-1 ml-4 mr-2'>Sefe Search</span>
          <button className='p-1 bg-blue-500 dark:bg-slate-600 cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {""+`${safeSearch}`} </button>
        </div>
        {
          results?.map((res, i) => (

            <div className='md:w-2/5 w-full' key={res.id}>
              <h4 className='text-sm hover:underline  '>
                {res.datePublished}
              </h4>
              <a className='w-10' href={res.url}>
                <img className='w-40' src={res.image.url} alt="" />
              </a>
              <a href={res.url}>
                <h2 className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {res.title}
                </h2>
                <p className='text-sm'>
                  {res.description}
                </p>
              </a>
              <div className='flex flex-col'>
                <span>
                  Provider {res.provider.name}
                </span>
                <span className='text-sm'>
                  {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                </span>
              </div>

            </div>
          ))
        }
        <Pagination totalResults={totalResults} setPage={setPage} />

      </section>
    )
//   } else {
//     return <Loading />
//   }
}

export default News