import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFFalse } from '../store/slice/isFinished.slice'

const Search = ({ typeSearch, setResults,results }) => {


  const term = useSelector((state) => state.termSlice)
  const isFinished = useSelector((state) => state.Isfinished)

  const dispatch = useDispatch()

  // console.log(term)

  const getAResult = () => {


    //Google Search

    const options = {
      method: 'POST',
      url: 'https://google-search-5.p.rapidapi.com/google/organic-search',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
        'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com'
      },
      data: `{"query":${term},"gl":"US","hl":"en_US","device":"desktop","duration":"","autocorrect":1,"page":1,"uule":"a","pages":20}`
    };
    axios.request(options)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))

    // setIsFinished(false) ///   No vuelve al estado inicial CAMBIAR
    dispatch(setFFalse())
  }

  //Google Images

  const getBImg = () => {

    const options = {
      method: 'POST',
      url: 'https://google-search-5.p.rapidapi.com/google/images',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
        'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com'
      },
      data: `{"query":${term},"gl":"US","hl":"en_US","device":"desktop","duration":"","autocorrect":1,"page":1,"uule":"a","pages":20,"size":"any","license":"any","color":"any","type":"any"}`
    };

    axios.request(options)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))

    // setIsFinished(false) //   No vuelve al estado inicial CAMBIAR

    dispatch(setFFalse())

  }

  //Get Videos

  const getCVideos = () => {
    const options = {
      method: 'POST',
      url: 'https://google-search-5.p.rapidapi.com/google/videos',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
        'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com'
      },
      data: `{"query":${term},"gl":"US","hl":"en_US","device":"desktop","duration":"","autocorrect":1,"page":1,"uule":"a","pages":20,"length":"any","quality":"any","caption":"any"}`
    };

    axios.request(options)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))

    // setIsFinished(false) //   No vuelve al estado inicial CAMBIAR

    dispatch(setFFalse())

  }

  //Get News

  const getDNews = () => {
    const options = {
      method: 'POST',
      url: 'https://google-search-5.p.rapidapi.com/google/news',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1112f86f7emsh23a7be7b7759569p18c4a8jsn6094db8603c1',
        'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com'
      },
      data: `{"query":${term},"gl":"US","hl":"en_US","device":"desktop","duration":"","autocorrect":1,"page":1,"uule":"a","pages":20}`
    };

    axios.request(options)
      .then(res => setResults(res.data))
      .catch(err => console.log(err))

    // setIsFinished(false) //   No vuelve al estado inicial CAMBIAR

    dispatch(setFFalse())

  }

  // console.log(results)
    if (term) {
      if (typeSearch == 'a' && isFinished ) {
        getAResult()
      } else if (typeSearch == 'b' && isFinished ) {
        getBImg()
      } else if (typeSearch == 'c' && isFinished ) {
        getCVideos()
      }else if(typeSearch == 'd' && isFinished ){
        getDNews()
      }
    }
    

  // return 
}

export default Search