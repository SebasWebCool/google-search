import React from 'react'
import Loading from '../components/Loading'

const News = ({ results }) => {

  console.log(results);

  if (results) {

    return (
      <section className=' flex flex-wrap justify-between items-center space-y-6 sm:px-10'>
        {
          results?.map((res, i) => (

            <div className='md:w-2/5 w-full' key={i}>
              <h4 className='text-lg hover:underline dark:text-blue-300 text-blue-700 '>
                {res.date_time}
              </h4>
              <a className='w-10' href={res.url}>
                <img className='w-40' src={res.image} alt="" />
              </a>
              <a href={res.url}>
                <h2 className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {res.title}
                </h2>
                <p className='text-sm'>
                  {res.snippet}
                </p>
              </a>
              <div className='flex flex-col'>
                <span>
                  From {res.source.name}
                </span>
                <span className='text-sm'>
                  {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                </span>
              </div>

            </div>
          ))
        }
      </section>
    )
  } else {
    return <Loading />
  }
}

export default News