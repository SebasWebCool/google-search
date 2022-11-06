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


    return (
        <section className='flex flex-col justify-center align-middle gap-10'>

            <div className='flex flex-wrap justify-center gap-10'>

                {
                    results?.contents.map((res, i) => (

                        res.type == "video" ?

                            <div key={i} className='w-2/6'>
                                <a className='w-full ' href={`https://www.youtube.com/watch?v=${res.video.videoId}`}>
                                    <img className='w-full' src={res.video.thumbnails && res.video.thumbnails[0].url} alt="" />
                                </a>

                                <a href={`https://www.youtube.com/watch?v=${res.video.videoId}`}>
                                    <h2 className='text-lg hover:underline '>
                                        {res.video.title.length > 30 ? res.video.title.slice(0, 40) + '...' : res.video.title}
                                    </h2>
                                </a>
                                <a href={`https://www.youtube.com/watch?v=${res.video.videoId}`}>
                                    <p>
                                        https://www.youtube.com/watch?v={res.video.videoId}
                                    </p>
                                </a>
                                <span>Views {res.video.stats.views}</span>
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