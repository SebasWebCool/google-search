import React from 'react'
import { useState } from 'react'
import Loading from '../components/Loading'
import Pagination from './Pagination'

const Videos = ({ results, setCursorVideos}) => {

    const [previousPage, setPreviousPage] = useState()

        console.log(results)


        const handleNext = ()=>{
            setPreviousPage(results.cursorNext)
            setCursorVideos(results.cursorNext)
        }

        const handlePrevious = ()=>{
            setCursorVideos(previousPage)
        }
        
        console.log(previousPage);


        return (
            <section className='flex flex-col justify-center align-middle gap-10'>
            
                <div className='flex flex-wrap justify-center gap-10'>

                {
                    results?.contents.map((res, i) =>(
                        
                        res.type == "video" ?
                        
                        <div key={i} className='w-2/6'>
                            <a className='w-full ' href={`https://www.youtube.com/watch?v=${res.video.videoId}`}>
                                <img className='w-full' src={res.video.thumbnails && res.video.thumbnails[0].url} alt="" />
                            </a>
                            
                            <a href={res.url}>
                                <h2 className='text-lg hover:underline '>
                                    {res.video.title.length > 30 ? res.video.title.slice(0,40) + '...': res.video.title}
                                </h2>
                            </a>
                            <p>
                            https://www.youtube.com/watch?v={res.video.videoId}
                                {/* {   res.url &&  res.url.length > 30 ? res.url.slice(0, 30) : res.url}  */}
                            </p>
                            <span>Views {res.video.stats.views}</span>
                            {/* <span>{res.contents.video.publishedTimeText}</span> */}
                        </div>
                    :""
                    )
                    )
                }
                </div>

                <div className='flex justify-center gap-20'>
                   {
                     previousPage ? <button onClick={()=>handlePrevious()}>Previous</button> : ""
                   }
                    <button onClick={()=> handleNext()} >Next</button>
                </div>

            </section>
        )
}

export default Videos