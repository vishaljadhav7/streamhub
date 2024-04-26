import React from 'react'
import { useSelector } from 'react-redux'
import MovieLists from './MovieLists'

const GeminiSuggestions = () => {
  const gemini = useSelector(store => store.gemini);
  const {movieNames, movieResults} = gemini;
  
  if(!movieNames) return

  // console.log("from sugg " , movieNames ," and ", movieResults)
  
  
  return (
    <div className='mt-4 p-4 bg-black text-white bg-opacity-90 '>
       <div className=''>
         {movieNames.map((movieName,index)=>(
          <MovieLists
           key={movieName}
           title={movieName}
           movies={movieResults[index]}
          />
         ))}
       </div>
    </div>
  )
}

export default GeminiSuggestions