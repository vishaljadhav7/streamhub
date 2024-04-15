import React from 'react'
import MovieLists from './MovieLists'
import {useSelector} from 'react-redux'
const MoveListsContainer = () => {
  const movies = useSelector(store=>store.movies)
  //  console.log("djnanwv  ", movies.popularMovies);
  return (
    <div className='bg-black w-screen'>
      <div className=' mt-0 md:-mt-28 relative z-20'> 
      <MovieLists title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MovieLists title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieLists title={"Popular"} movies={movies.popularMovies}/>

      </div>
    </div>

  )
}

export default MoveListsContainer