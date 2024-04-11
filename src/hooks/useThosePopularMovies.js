import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/allMoviesSlice";


const useThosePopularMovies = () => {
   
  const dispatch = useDispatch();  
  const getThosePopularMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
    const json = await data.json() ; 
    // console.log("ThosePopularMovies   ", json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
   getThosePopularMovies()
  },[])

}


export default useThosePopularMovies ;