import React from 'react'
import Loading from '../components/Loading'

const News = ({results}) => {

    console.log(results);
    
    if(results){

      return (
        <section className=' flex flex-wrap justify-between space-y-6 sm:px-10'>
          {
            results?.map((res,i)=>(
              
              <div className='md:w-2/5 w-full' key={i}>
                <h4 >
                  {res.date_time}
                </h4>
                <a href={res.url}>
                  <img src={res.image} alt="" />
                </a>
                <a href={res.url}>
                  <h2 className='text-ñg hover:underline dark:text-blue-300 text-blue-700'>
                    {res.title}
                  </h2>
                  <p>
                    {res.snippet}
                  </p>
                </a>
                  <span>
                    From {res.source.name}
                  </span>
              </div>
            ))
          }
        </section>
      )
    }else{
      return <Loading/>
    }
}

export default News