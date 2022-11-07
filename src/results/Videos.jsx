import React from 'react'
import { useState } from 'react'

const Videos = ({ results, setCursorVideos }) => {

    const [previousPage, setPreviousPage] = useState()


    const handleNext = () => {
        // setPreviousPage(results.cursorNext)
        setCursorVideos(results.cursorNext)
    }

    // const handlePrevious = () => {
    //     setCursorVideos(previousPage)
    // }

    console.log(results)


    return (
        <section className='flex flex-col justify-center align-middle gap-6'>

            <section className='mx-10'>
                <h3 className='text-xl pb-1'>
                    Similar Search
                </h3>
                <ul className='flex flex-wrap gap-2 py-2'>
                    {
                        results?.refinements == false ? <p className="text-center text-lg">No similar Search</p>
                            : results?.refinements.map((sugges, i) => (
                                <li className='px-3' key={i}>
                                    <a className='transition ease-in-out delay-150 duration-300 hover:text-blue-500 cursor-pointer' onClick={() => {
                                        dispatch(setTerm(sugges))
                                        dispatch(setLoadingTrue())
                                    }}
                                    >
                                        <p>
                                            {sugges}
                                        </p>
                                    </a>
                                </li>
                            ))
                    }
                </ul>
            </section>

            <div className='flex flex-wrap justify-center gap-10'>

                {
                    results?.contents.map((res, i) => (

                        res.type == "video" ?

                            <div key={i} className='sm:w-2/6 w-4/6'>
                                <a className='w-full ' href={`https://www.youtube.com/watch?v=${res.video.videoId}`}>
                                    <img className='w-full transition ease-in-out delay-100 duration-300  hover:scale-125' src={res.video.thumbnails && res.video.thumbnails[0].url} alt="" />
                                </a>

                                <a href={`https://www.youtube.com/watch?v=${res.video.videoId}`}>
                                    <h2 className='text-lg transition ease-in-out delay-150 duration-300 hover:text-blue-500 '>
                                        {res.video.title.length > 30 ? res.video.title.slice(0, 40) + '...' : res.video.title}
                                    </h2>
                                </a>
                                <a className='transition ease-in-out delay-150 duration-300 hover:text-blue-500' href={`https://www.youtube.com/watch?v=${res.video.author.channelId}`}>
                                    <p>
                                        {res.video.author.title}
                                    </p>
                                </a>
                                <span className='text-sm'>Views {res.video.stats.views ? res.video.stats.views : 'IDK'}</span>
                                {/* <span>{res.video.publishedTimeText}</span> */}
                            </div>
                            : ""
                    )
                    )
                }
            </div>

            <div className='flex justify-center gap-20'>
                {/* {
                    previousPage ? <button onClick={() => handlePrevious()}>Previous</button> : ""
                } */}
                <button onClick={() => handleNext()} >Next</button>
            </div>

        </section>
    )
}

export default Videos