import React from 'react'
import MovieCard from './MovieCard'

const MovieLists = ({ movies, title }) => {
  if(!movies) return;
  return (
    <div className='px-6 text-white'>
      <h1 className='text-lg md:text-2xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        {movies?.map((movie) => (
          <div key={movie.id} className='flex justify-around'>
            <MovieCard poster_path={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieLists