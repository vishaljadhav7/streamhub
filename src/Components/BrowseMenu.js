import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { API_OPTIONS } from '../utils/constants'

const BrowseMenu = () => {

  const getThoseNowPlaying = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
    API_OPTIONS
    );
    const json = await data.json();
    console.log("getThoseNowPlaying   ", json.results);
  }

  useEffect(()=>{
    getThoseNowPlaying();
  }, [])

  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default BrowseMenu