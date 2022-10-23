import React from 'react'
import { Route, Routes } from 'react-router-dom';
import News from '../results/News'
import Htmls from '../results/Htmls'
import Imgs from '../results/Imgs';
import Videos from '../results/Videos';
const Results = ({ results, suggestion, typeSearch}) => {

  console.log(results);
  console.log(suggestion);

  results && console.log(results[0])

  console.log(typeSearch);

  return (
    <div class="h-full">
      {
        typeSearch == 'a' ?   <Htmls results={results?.organic} suggestion={suggestion}/> : ""
      }
      {
        typeSearch == 'b' ?   <Imgs results={results?.results}/>
        : ""
      }
      {
        typeSearch == 'c' ?   <Videos results={results?.results}/>
        : ""
      }
      {
        typeSearch == 'd' ?   <News results={results?.results}/>
        : ""
      }
      
    </div>
    
  )
}

export default Results