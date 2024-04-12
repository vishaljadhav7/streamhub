import React from 'react'
import MovieCard from './MovieCard'
const MovieLists = ({title, movies}) => {
    if(!movies) return ;
    // console.log("from movielists  ", movies)
  return (
    <div className='px-6  text-white '>
        <h1 className='text-2xl py-4'>{title} </h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex gap-2'>
            {movies.map(movie => <MovieCard poster_path={movie.poster_path} key={movie.id}/>)}
        </div>
      </div>
       
    </div>
  )
}

export default MovieLists