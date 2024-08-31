import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants"
import { useDispatch , useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/allMoviesNSeriesSlice";



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

  },[])

}


export default useThoseTopRatedMovies ;