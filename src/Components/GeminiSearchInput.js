import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
// import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS} from '../Utils/constants'
import UseGeminiAI from '../hooks/useGeminiAI'
import {addGeminiMovieResults} from '../Utils/geminiSlice';


const GeminiSearchInput = () => {
  const dispatch = useDispatch();
  const searchQuery = useRef(null);

  const searchMovieTMDB = async (movie) =>{
    const data = await fetch( "https://api.themoviedb.org/3/search/movie?query=" +
    movie +
    "&include_adult=false&language=en-US&page=1",
    API_OPTIONS)
    const json = await data.json();
    return json.results ;
  }

  const handleGeminiSearch = async () => {
    
    const geminiSearchQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchQuery.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
    
    const geminiResults = await UseGeminiAI(geminiSearchQuery);
    const allMovies = geminiResults.split(",");
   
    const promisesArray = allMovies.map(movie => searchMovieTMDB(movie));
    
    const tmdbMovies = await Promise.all(promisesArray);

    // console.log("tmdbMovies ", tmdbMovies)
    
    dispatch(addGeminiMovieResults( {movieNames: allMovies , movieResults : tmdbMovies} ));

  }


  return (
    <div className='pt-[40%] flex justify-center md:pt-[14%]' onSubmit={(e)=>e.preventDefault()}>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 '>
            <input 
              ref={searchQuery}
              type='text' 
              placeholder='What are you in the mood to watch?'
              className='p-4 m-4 col-span-9 '
            />
            <button 
            className ='col-span-3 text-white  bg-red-500 py-5 px-4 m-4 rounded-lg '
            onClick={handleGeminiSearch}
            >Search</button>
        </form>
    </div>
  )
}

export default GeminiSearchInput
