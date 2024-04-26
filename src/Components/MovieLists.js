import React from 'react'
import MovieCard from './MovieCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieLists = ({title, movies}) => {
    if(!movies) return ;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    // console.log("from movielists  ", movies)
    return (
      <div className='px-6 text-white'>
        <h1 className='text-lg md:text-2xl py-4'>{title}</h1>
          {/* <div className='flex justify-center p-2 '>  </div>
            <div className='flex overflow-x-scroll'> */}
             <Slider {...settings} >
               {movies.map((movie) => (
                 <div key={movie.id} className='flex justify-around' >
                   <MovieCard poster_path={movie.poster_path} />
                 </div>
                ))}
             </Slider> 

            {/* </div>
          </div>
    */}
      </div>
    );
  };
export default MovieLists