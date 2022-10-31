import React, { useState } from 'react'
import News from '../results/News'
import Htmls from '../results/Htmls'
import Imgs from '../results/Imgs';
import Videos from '../results/Videos';
import { useSelector } from 'react-redux';

const Results = ({ suggestion, typeSearch}) => {

  const [results, setResults] = useState()

 
  // results?.organic  ?  totalPages =  Math.ceil(results?.organic.length / itemsForPage)
  //                   : totalPages = Math.ceil(results?.results.length / itemsForPage)
                    

  // let showedResults  

  // results?.organic  ?  showedResults =  results?.organic.slice(firstPosition,lastPosition)
  //                   : showedResults = results?.results.slice(firstPosition,lastPosition)

  // console.log(results);

  // results && console.log(results[0])

  const loading = useSelector(state => state.isLoading)
  console.log(loading);

  return (
    <div >
      {
        typeSearch == 'a' ?   <Htmls results={results} setResults={setResults}/> 

        : typeSearch == 'b' ?   <Imgs setResults={setResults} results={results}/>
    
        : typeSearch == 'c' ?   <Videos totalPages={totalPages} setCurrentPage={setCurrentPage} results={results}/>

        : typeSearch == 'd' ?   <News totalPages={totalPages} setCurrentPage={setCurrentPage} results={results}/>

        : ""
      }
      
    </div>
    
  )
}

export default Results