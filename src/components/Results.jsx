import React, { useState,useEffect } from 'react'
import News from '../results/News'
import Htmls from '../results/Htmls'
import Imgs from '../results/Imgs';
import Videos from '../results/Videos';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Results = ({ typeSearch}) => {

  const [results, setResults] = useState()
  const [totalResults, setTotalResults] = useState("")
  const [page, setPage] = useState(1)
  const [safeSearch, setSafeSearch] = useState(false)

  const [similarSearch, setSimilarSearch] = useState()

  const term = useSelector(state => state.termSlice)

  useEffect(()=>{
    if(typeSearch == 'a'){
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
      }
  
      axios.request(options)
        .then(res => {
          setTotalResults(res.data.totalCount)
          setResults(res.data.value)
          setSimilarSearch(res.data.relatedSearch)
        })
    }else if(typeSearch == 'b'){
      const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
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
        })
        .catch(err => console.log(err))

    }else if (typeSearch == 'c'){
      const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: {q:`${term}`, next: `${page}`},
        headers: {
          'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
          'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
      };
      
      axios.request(options)
        .then(res => {
          setTotalResults(res.data.results)
          setResults(res.data.items)
        })
        .catch(err => console.log(err))
    } else if( typeSearch == 'd' ){

      const options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: {
          q: `${term}`,
          pageNumber: page,
          pageSize: '36',
          autoCorrect: 'true',
          safeSearch: `${safeSearch}`,
          withThumbnails: 'true',
          fromPublishedDate: 'null',
          toPublishedDate: 'null'
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
        })
        .catch(err => console.log(err))


    }},[term,typeSearch,page])

  const loading = useSelector(state => state.isLoading)
  console.log(loading);

  return (
    <div >
      {
        typeSearch == 'a' ?   <Htmls results={results} setPage={setPage} similarSearch={similarSearch} setSafeSearch={setSafeSearch} totalResults={totalResults}/> 

        : typeSearch == 'b' ?   <Imgs  setPage={setPage} safeSearch={safeSearch} setSafeSearch={setSafeSearch} totalResults={totalResults} results={results}/>
    
        : typeSearch == 'c' ?   <Videos setPage={setPage} safeSearch={safeSearch} setSafeSearch={setSafeSearch} totalResults={totalResults} results={results}/>

        : typeSearch == 'd' ?   <News setPage={setPage} safeSearch={safeSearch} setSafeSearch={setSafeSearch} totalResults={totalResults} results={results}/>

        : ""
      }
      
    </div>
    
  )
}

export default Results