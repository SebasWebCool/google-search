import React, { useState, useEffect } from 'react'
import News from '../results/News'
import Htmls from '../results/Htmls'
import Imgs from '../results/Imgs';
import Videos from '../results/Videos';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loading from './Loading';
import { setLoadingFalse } from '../store/slice/isLoading.slice';

const Results = ({ typeSearch }) => {

  const [results, setResults] = useState()
  const [totalResults, setTotalResults] = useState("")
  const [page, setPage] = useState(1)
  const [safeSearch, setSafeSearch] = useState(false)

  const [similarSearch, setSimilarSearch] = useState()

  const [cursorVideos, setCursorVideos] = useState("")

  const term = useSelector(state => state.termSlice)
  const isLoading = useSelector(state => state.isLoading)

  const dispatch = useDispatch()

  console.log(page)

  useEffect(() => {
    if (typeSearch == 'a') {
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
          dispatch(setLoadingFalse())
        })
    } else if (typeSearch == 'b') {
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
          dispatch(setLoadingFalse())
        })
        .catch(err => console.log(err))

    } else if (typeSearch == 'c') {
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/search/',
        params: { q: `${term}`, hl: 'en', gl: 'US', cursor: `${cursorVideos}` },
        headers: {
          'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };


      axios.request(options)
        .then(res => {
          setResults(res.data)
          dispatch(setLoadingFalse())

        })
        .catch(err => console.log(err))
    } else if (typeSearch == 'd') {

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
          dispatch(setLoadingFalse())


        })
        .catch(err => console.log(err))


    }
  }, [term, typeSearch, page, cursorVideos, safeSearch])

  // const loading = useSelector(state => state.isLoading)
  // console.log(loading);

  if (isLoading) {
    return <Loading />
  } else {

    return (
      <div >
        {
          typeSearch == 'a' ? <Htmls page={page} results={results} setPage={setPage} safeSearch={safeSearch} similarSearch={similarSearch} setSafeSearch={setSafeSearch} totalResults={totalResults} />

            : typeSearch == 'b' ? <Imgs setPage={setPage} safeSearch={safeSearch} setSafeSearch={setSafeSearch} totalResults={totalResults} results={results} />

              : typeSearch == 'c' ? <Videos setCursorVideos={setCursorVideos} results={results} />

                : typeSearch == 'd' ? <News setPage={setPage} safeSearch={safeSearch} setSafeSearch={setSafeSearch} totalResults={totalResults} results={results} />

                  : ""
        }

      </div>

    )
  }
}

export default Results