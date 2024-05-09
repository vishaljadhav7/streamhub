import React from 'react'
import MovieCard from './MovieCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieLists = ({ movies, title }) => {
  return (
    <div className='px-6 text-white'>
      <h1 className='text-lg md:text-2xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        {movies.map((movie) => (
          <div key={movie.id} className='flex justify-around'>
            <MovieCard poster_path={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieLists