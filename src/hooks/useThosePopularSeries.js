import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants"
import { useDispatch } from "react-redux";
import { addPopularSeries } from "../Utils/allMoviesNSeriesSlice";
import { useSelector } from 'react-redux';


// https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1

const useThosePopularSeries = () => {
   
  const dispatch = useDispatch();  
   const popularSeries = useSelector(store => store.movies.popularSeries);
  const getThosePopularSeries = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)
    const json = await data.json() ; 
    // console.log("ThosePopularMovies   ", json.results);
    dispatch(addPopularSeries(json.results));
  }

  useEffect(()=>{
     if(!popularSeries) getThosePopularSeries()
  },[])

}


export default useThosePopularSeries ;