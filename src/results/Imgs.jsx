import Pagination from './Pagination'

const Imgs = ({ results, setSafeSearch, totalResults, setPage, safeSearch, page }) => {

  const handleSafeSearch = () => {
    setSafeSearch(!safeSearch)
  }

  return (
    <section className='w-full flex flex-col justify-center align-middle'>
      <div className='w-full flex justify-start align-middle'>
        <span className='p-1 ml-4 mr-2'>Safe Search is</span>
        <button className='p-1 bg-blue-500 dark:bg-slate-600 cursor-pointer text-gray-200 rounded' onClick={handleSafeSearch}> {safeSearch ? ` on` :' off'} </button>
      </div>
      <ul className='w-full flex flex-wrap justify-center gap-4'>
        {
          results?.map((res, i) =>
          (
            res.url ?
              <li className='b-gray-500 my-5 h-32 p-1 sm:h-64' key={i}>
                <a href={res.url} target={'_blank'}>
                  <img className='h-full transition ease-in-out delay-100 duration-300  hover:scale-125' src={res.url} alt="" />
                  {/* </a>
                {/* <h3>{res.title &&  res.title.length > 30 ? res.title.slice(0,20)+"..." : res.title }</h3> 
                <a className='text-sm hover:underline cursor-pointer hover:text-teal-800' href={res.webpageUrl}> */}
                  {res.webpageUrl && res.webpageUrl.length > 30 ? res.webpageUrl.slice(0, 30) : res.webpageUrl}
                </a>
                <br />
                <a className='transition ease-in-out delay-150 duration-300 hover:text-blue-500 cursor-pointer hover:text-teal-800' href={res.webpageUrl} target={'_blank'}>
                  Go to the website
                </a>
              </li>
              : "")
          )
        }
      </ul>
      <Pagination page={page} totalResults={totalResults} setPage={setPage} />

    </section>
  )
}

export default Imgs