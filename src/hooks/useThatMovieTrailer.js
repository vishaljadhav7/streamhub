import { addTrailerVideo } from '../Utils/allMoviesNSeriesSlice';
import { useDispatch , useSelector} from 'react-redux';
import {API_OPTIONS} from '../Utils/constants';
import {useEffect} from 'react'

const useThatMovieTrailer = (movieId) => {
  const movieTrailer = useSelector(store=>store.movies.trailerVideo)
  const dispatch = useDispatch(); // always use your hooks on the top
  const getMainMovieTrailers = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',API_OPTIONS) 
  const json = await data.json();
  //  console.log("MainMovieTrailers ", json.results)
  const filteredTrailers = json?.results?.filter(trailer=> trailer.type === 
    "Trailer" )
  // console.log("you got your trailers here ", filteredTrailers);
  const trailer = filteredTrailers.length ? filteredTrailers[0] : json.results[0];
   
  // console.log("your trailer ", trailer)
  dispatch(addTrailerVideo(trailer)) 
  }
  
  useEffect(()=>{
    if(!movieTrailer) getMainMovieTrailers();
  },[])
  
}

export default useThatMovieTrailer