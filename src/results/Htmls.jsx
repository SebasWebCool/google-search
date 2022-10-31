import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { setFTrue } from '../store/slice/isFinished.slice'
import { setTerm } from '../store/slice/term.slice'
import Pagination from './Pagination'

const htmls = ({ results, setResults}) => {

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState("")
  const [similarSearch, setSimilarSearch] = useState()

  const term = useSelector(state => state.termSlice)
  const [safeSearch, setSafeSearch] = useState(false)

  console.log(term);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: {
        q: `${term}`,
        pageNumber: page,
        pageSize: '36',
        autoCorrect: 'true',
        safeSearch: `${safeSearch}`
      },
      headers: {
        'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(res => {
        setTotalResults(res.data.totalCount)
        setResults(res.data.value)
        setSimilarSearch(res.data.relatedSearch)
      })
      .catch(err => console.log(err))

  }, [term, page,safeSearch])

  const handleSafeSearch = ()=>{
    setSafeSearch(!safeSearch)
    console.log(safeSearch);
  }
  
  console.log(results)

  if (results) {
    return (
      <div className='p-6 flex flex-col justify-start align-middle'>
        <div className='w-full flex justify-start align-middle'>
          <span className='text-xl p-1 ml-4 mr-2'>Sefe Search</span>
          <button className='text-xl p-1 bg-slate-600 cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {""+`${safeSearch}`} </button>
        </div>

        <section className='px-2'>
          <h3 className='text-2xl pb-2'>
            Similar Search
          </h3>
           <ul className='flex flex-wrap gap-2 py-7'>
            {
              similarSearch == false ? <p className="text-center text-lg">No similar questions</p>
                : similarSearch?.map((sugges, i) => (
                  <li className='px-3' key={i}>
                    <a className='hover:underline cursor-pointer' onClick={() => {
                      dispatch(setTerm(sugges))
                      // dispatch(setFTrue())
                      }}
                    >
                      <p>
                        {sugges.replaceAll('</b>', '').replaceAll('<b>','')}
                      </p>
                    </a>
                  </li>
                ))
            }
          </ul> 
        </section>
        <main className='flex flex-wrap justify-between align-middle space-y-6 sm:px-5'>
          {
            results?.map((res) => (
              <section key={res.id} className='md:w-2/5 w-full'>
                  <p className='text-sm'>
                    {res.datePublished}
                  </p>
                <a href={res.url} target="_blank">
                  <p className='text-sm'>
                    {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                  </p>
                </a>
                <a href={res.url}>
                  <h2 className='text-lg hover:underline dark:text-blue-300 text-blue-700 '>{res.title}</h2>
                </a>
                <p className='w-full text-justify'>{res.description}</p>
              </section>
            ))
          }
        </main>
        <Pagination totalResults={totalResults} setPage={setPage} results={results}/>
      </div>)
  } else {
    return <Loading />
  }
}

export default htmls