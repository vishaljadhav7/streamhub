import React from 'react'
import MovieCard from './MovieCard'
const MovieLists = ({title, movies}) => {
    if(!movies) return ;
    console.log("from movielists  ", movies)
  return (
    <div className='flex overflow-x-scroll '>
        <div >
            <h1>
                {title}
            </h1>
        </div>
        <div className='flex gap-2'>
        {movies.map(movie => <MovieCard poster_path={movie.poster_path} key={movie.id}/>)}
        </div>
       
    </div>
  )
}

export default MovieLists