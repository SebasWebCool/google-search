import React from 'react'

const Videos = ({ results }) => {

    console.log(results)

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
}

export default Videos