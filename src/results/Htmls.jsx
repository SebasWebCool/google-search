import React from 'react'
import Loading from '../components/Loading'

const htmls = ({suggestion,results}) => {


  
if(results){
return (
<div className='p-6 flex flex-col justify-start align-middle'>
      <section className='px-2'>
        <h3 className='text-3xl pb-5'>
          Similar Questions
        </h3>
        <ul className='flex flex-wrap py-5'>
          {
            suggestion == false ? <p className="text-center text-lg">No similar questions</p>
            : suggestion?.map((sugges,i) => (
              <li className='px-3' key={i}>
                <h4>
                  {sugges.question}
                </h4>
              </li>
            ))
          }
        </ul>
      </section>
      <main className='flex flex-wrap justify-between align-middle space-y-6 sm:px-5'>
        {
          results?.map((res) => (
            <section key={res.rank} className='md:w-2/5 w-full'>
              <a href={res.url} target="_blank">
                <p className='text-sm'>
                  {res.url.length > 30 ? res.url.slice(0,30) : res.url}
                </p>
              </a>
              <a href={res.url}>
                <h2 className='text-lg hover:underline dark:text-blue-300 text-blue-700 '>{res.title}</h2>
              </a>
              <p className='w-full text-justify'>{res.snippet}</p>
            </section>
          ))
        }
      </main>
    </div>  )
}else{
  return <Loading/>
}
}

export default htmls