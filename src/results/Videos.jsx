import React from 'react'
import Loading from '../components/Loading'

const Videos = ({ results }) => {

    console.log(results)

    if(results){

        return (
            <section className='block w-full '>
                {
                    results?.map(res => (
                        <div key={res[res]} className='p-2 my-5 bg-slate-600 w-60'>
                            <a className='w-full ' href={res.url}>
                                <img className='w-full' src={res.image} alt="" />
                            </a>
                            <a href={res.url}>
                                <h2>
                                    {res.title}
                                </h2>
                            </a>
                        </div>
                    ))
                }
            </section>
        )
    }else{
        return <Loading/>
    }
}

export default Videos