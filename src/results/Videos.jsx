import React from 'react'
import Loading from '../components/Loading'

const Videos = ({ results }) => {

    console.log(results)

    if (results) {

        return (
            <section className='flex justify-evenly flex-wrap gap-10'>
                {
                    results?.map((res,i) => (
                        <div key={i} className='w-2/6'>
                            <a className='w-full ' href={res.url}>
                                <img className='w-full' src={res.image} alt="" />
                            </a>
                            <a href={res.url}>
                                <h2 className='text-lg hover:underline '>
                                    {res.title}
                                </h2>
                            </a>
                            <p>
                                {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                            </p>
                        </div>
                    ))
                }
            </section>
        )
    } else {
        return <Loading />
    }
}

export default Videos