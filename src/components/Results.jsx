import React, { useState } from 'react'
import News from '../results/News'
import Htmls from '../results/Htmls'
import Imgs from '../results/Imgs';
import Videos from '../results/Videos';
import { useSelector } from 'react-redux';

const Results = ({ results, suggestion, typeSearch}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsForPage, setItemsForPage] = useState(16)

  const lastPosition = currentPage * itemsForPage
  const firstPosition = lastPosition - itemsForPage
  let totalPages 
  results?.organic  ?  totalPages =  Math.ceil(results?.organic.length / itemsForPage)
                    : totalPages = Math.ceil(results?.results.length / itemsForPage)
                    

  let showedResults  

  results?.organic  ?  showedResults =  results?.organic.slice(firstPosition,lastPosition)
                    : showedResults = results?.results.slice(firstPosition,lastPosition)

  console.log(results);
  console.log(suggestion);

  results && console.log(results[0])

  const loading = useSelector(state => state.isLoading)
  console.log(loading);

  return (
    <div >
      {
        typeSearch == 'a' ?   <Htmls totalPages={totalPages} setCurrentPage={setCurrentPage} results={showedResults} suggestion={suggestion}/> 

        : typeSearch == 'b' ?   <Imgs totalPages={totalPages} setCurrentPage={setCurrentPage} results={showedResults}/>
    
        : typeSearch == 'c' ?   <Videos totalPages={totalPages} setCurrentPage={setCurrentPage} results={showedResults}/>
      
        : typeSearch == 'd' ?   <News totalPages={totalPages} setCurrentPage={setCurrentPage} results={showedResults}/>

        : ""
      }
      
    </div>
    
  )
}

export default Results