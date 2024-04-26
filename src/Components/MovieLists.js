import React from 'react'
import MovieCard from './MovieCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieLists = ({title, movies}) => {
    if(!movies) return ;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1
    };

    // console.log("from movielists  ", movies)
    return (
      <div className='px-6 text-white'>
        <h1 className='text-lg md:text-2xl py-4'>{title}</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
export default MovieLists