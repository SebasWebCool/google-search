import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setLoadingTrue } from '../store/slice/isLoading.slice'
import { setTerm } from '../store/slice/term.slice'
import Pagination from './Pagination'

const htmls = ({ page,results, setSafeSearch, similarSearch, totalResults, setPage, safeSearch }) => {

  const dispatch = useDispatch()

  // const term = useSelector(state => state.termSlice)

  console.log(totalResults);

  const handleSafeSearch = () => {
    setSafeSearch(!safeSearch)
  }

  return (
    <div className='p-6 flex flex-col justify-start align-middle'>
      <div className='w-full flex justify-start align-middle mb-6'>
        <span className='text-xl p-1 ml-4 mr-2'>Safe Search is</span>
        <button className='bg-blue-500 dark:bg-slate-600 text-xl p-1  cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {safeSearch ? ` on` :' off'} </button>
      </div>
  
      <section className='px-2 mb-3'>
        <h3 className='text-xl pb-1'>
          Similar Search
        </h3>
        <ul className='flex flex-wrap gap-2 py-5'>
          {
            similarSearch == false ? <p className="text-center text-lg">No similar Search</p>
              : similarSearch?.map((sugges, i) => (
                <li className='px-3' key={i}>
                  <a className='hover:underline cursor-pointer' onClick={() => {
                    dispatch(setTerm(sugges.replaceAll('</b>', '').replaceAll('<b>', '')))
                    dispatch(setLoadingTrue())
                  }}
                  >
                    <p>
                      {sugges.replaceAll('</b>', '').replaceAll('<b>', '')}
                    </p>
                  </a>
                </li>
              ))
          }
        </ul>
      </section>

      <main className='flex flex-wrap justify-between align-middle space-y-6 sm:px-5'>
        {
          results?.map((res, i) => (
            <section key={i} className='md:w-2/5 w-full'>
              {/* <p className='text-sm'>
                    {res.datePublished}
                  </p> */}
              <a href={res.url} target={'_blank'}>
                <p className='text-sm transition ease-in-out delay-150 duration-300 hover:text-blue-500'>
                  {res.url.length > 30 ? res.url.slice(0, 30) : res.url}
                </p>
              </a>
              <a href={res.url} target={'_blank'}>
                <h2 className='text-lg transition ease-in-out delay-150 duration-300 hover:text-blue-500 dark:text-blue-300 text-blue-700 '>{res.title}</h2>
              </a>
              <p className='w-full text-justify'>{res.description.length > 200 ? res.description.slice(0, 100) : res.description}</p>
            </section>
          ))
        }
      </main>
      <Pagination page={page} totalResults={totalResults} setPage={setPage} />
    </div>)

}

export default htmls