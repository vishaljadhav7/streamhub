import React from 'react'
import Card from './Card'

const RecommendationContainer = ({allRecomendations}) => {

  return (
 <div className='flex flex-wrap justify-center items-center gap-4'>
      {  allRecomendations?.results?.map((movie) => (
     <Card key={movie.id} poster_path={movie.poster_path}/>
    ))}
 </div>
  )
}

export default RecommendationContainer