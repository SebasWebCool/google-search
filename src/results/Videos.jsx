import React from 'react'
import Loading from '../components/Loading'
import Pagination from './Pagination'

const Videos = ({ results, setSafeSearch, totalResults, setPage, safeSearch }) => {

    console.log(results)


    const handleSafeSearch = () => {
        setSafeSearch(!safeSearch)
        console.log(safeSearch);
    }


    if (results) {

        return (
            <section className='flex justify-evenly flex-wrap gap-10'>
                <div className='w-full flex justify-start align-middle'>
                    <span className='p-1 ml-4 mr-2'>Sefe Search</span>
                    <button className='p-1 bg-slate-600 cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {"" + `${safeSearch}`} </button>
                </div>
                {
                    results?.map((res, i) => (
                        <div key={i} className='w-2/6'>
                            <a className='w-full ' href={res.url}>
                                {/* <img className='w-full' src={res.bestThumbnail.url} alt="" /> */}
                            </a>
                            <a href={res.url}>
                                <h2 className='text-lg hover:underline '>
                                    {res.title}
                                </h2>
                            </a>
                            <p>
                                {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                            </p>
                            <span>{res.uploadedAt}</span>
                            <span>{res.duration}</span>
                        </div>
                    ))
                }

                <Pagination totalResults={totalResults} setPage={setPage} />

            </section>
        )
    } else {
        return <Loading />
    }
}

export default Videos