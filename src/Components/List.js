import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const List = ({ movies = [], title, series = [] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [limitIdx, setLimitIdx] = useState(0);
  const moviesSlide = useRef(null);
  
  const prev = () => {
    if(currentIdx > 0){
      setCurrentIdx(prev => prev - 1);
    }
  }

  const next = () => {
    setLimitIdx(Math.floor(moviesSlide.current.scrollWidth / moviesSlide.current.offsetWidth) + 1);
    if(currentIdx <= limitIdx){
      setCurrentIdx(prev => prev + 1);
    }
  }

  useEffect(() => {
    if(moviesSlide.current !== null){
      moviesSlide.current.scrollLeft = moviesSlide.current.offsetWidth * currentIdx + 1;
    }
  }, [currentIdx]);

  return (
    <div className='relative px-4 md:px-8 text-white'>
      <h1 className='text-lg md:text-2xl py-4 font-semibold'>{title}</h1>
      <div className='relative flex items-center'>
        <button
          className='absolute left-0 transform -translate-y-1/2 top-1/2 p-2 bg-gradient-to-r from-gray-900 to-transparent text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none z-10'
          onClick={prev}
        >
          <FaAngleLeft className='w-8 h-8 md:w-10 md:h-10' />
        </button>
        <div className='flex overflow-hidden scroll-smooth' ref={moviesSlide}>
          
          {movies?.length && movies.map((movie) => {
            if(title === 'Popular Series') console.log(movie)
            return (
              <Link key={movie.id} to={`movie/${movie.id}`} className='flex-shrink-0 mx-2'>
                <Card poster_path={movie.poster_path} />
              </Link>
            )
          })}

          {series?.length && series.map((serial) => (
             <Link key={serial.id} to={`series/${serial.id}`} className='flex-shrink-0 mx-2'>
               <Card poster_path={serial.poster_path} />
             </Link>
          ))}
   
        </div>
        <button
          className='absolute right-0 transform -translate-y-1/2 top-1/2 p-2 bg-gradient-to-l from-gray-900 to-transparent text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none z-10'
          onClick={next}
        >
          <FaAngleRight className='w-8 h-8 md:w-10 md:h-10' />
        </button>
      </div>
    </div>
  );
};

export default List;
