import React from 'react'

const htmls = ({suggestion,results}) => {



  return (
<div className='p-6 flex flex-col justify-start align-middle'>
      <section className='px-2'>
        <h3 className='text-3xl pb-5'>
          Similar Questions
        </h3>
        <ul className='flex flex-wrap'>
          {
            suggestion?.map(sugges => (
              <li className='px-3' key={sugges.question}>
                <h4>
                  {sugges.question}
                </h4>
              </li>
            ))
          }
        </ul>
      </section>
      <main>
        {
          results?.map(res => (
            <section key={res.rank} className='py-5'>
              <a href={res.url}>
                <h2>{res.title}</h2>
              </a>
              <p>{res.snippet}</p>
            </section>
          ))
        }
      </main>
    </div>  )
}

export default htmls