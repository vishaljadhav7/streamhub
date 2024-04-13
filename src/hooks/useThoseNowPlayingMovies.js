import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {addNowPlayingMovies} from '../utils/allMoviesSlice';

const useThoseNowPlayingMovies = () => {
  
 const dispatch = useDispatch();
 
 const getThoseNowPlaying = async () => {
   const data = await fetch(
     'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
   API_OPTIONS
   );
   const json = await data?.json();
  //  console.log("getThoseNowPlaying->", json.results);
   dispatch(addNowPlayingMovies(json?.results))
 }

  useEffect(()=>{
    getThoseNowPlaying();
  }, [])

}

export default useThoseNowPlayingMovies ;