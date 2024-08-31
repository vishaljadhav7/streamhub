import { ALL_MOVIE_GENRES, ALL_SERIES_GENRES, API_OPTIONS, DISCOVER_MOVIE_API } from "../Utils/constants";
import  { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFiltersData } from "../Utils/filterSlice";


export function useGenreFilters(){
    const dispatch = useDispatch()
    const {allMovieGenres} = useSelector((state) => state.filters)
  
    useEffect(() => {
      async function fetchAllGenres() {
        try {
            console.log("fetching genres ")
          const [movieGenreRes, discoverMovieRes] = await Promise.all([
            fetch(ALL_MOVIE_GENRES, API_OPTIONS),
            fetch(DISCOVER_MOVIE_API, API_OPTIONS),
          ]);
          const [movieGenresJson, discoverMovieJson] = await Promise.all([
            movieGenreRes.json(),
            discoverMovieRes.json(),
          ]);
  
           console.log(movieGenresJson?.genres ,discoverMovieJson?.results  )
          dispatch(addFiltersData({ genres : movieGenresJson?.genres , movies : discoverMovieJson?.results })) 
        } catch (error) {
          console.log(error);
        }
      }
  
      if(!allMovieGenres) fetchAllGenres();
    }, []);

}