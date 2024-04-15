

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch , useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/allMoviesSlice";



const useThoseTopRatedMovies = () => {
 const topRatedMovies = useSelector(store => store.movies.topRatedMovies); 
  const dispatch = useDispatch();  
  const getThoseTopRatedMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
    const json = await data.json() ; 
    // console.log("ThoseTopRatedMovies  ", json.results);
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=>{
    if(!topRatedMovies) getThoseTopRatedMovies(); 
    // !topRatedMovies && getThoseTopRatedMovies()  
  },[])

}


export default useThoseTopRatedMovies ;


// https://api.themoviedb.org/3/movie/upcoming