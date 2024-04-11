import React from 'react'
import MovieLists from './MovieLists'
import {useSelector} from 'react-redux'
const MoveListsContainer = () => {
  const movies = useSelector(store=>store.movies)
  //  console.log("djnanwv  ", movies.popularMovies);
  return (
    <div className='bg-black'>
      <div className='-mt-28 relative z-20'> 
      <MovieLists title={"Now Playing Movies"} movies={movies.nowPlayingMovies} className="bg-transparent"/>
      <MovieLists title={"Popular"} movies={movies.popularMovies}/>
      <MovieLists title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      </div>
    </div>

  )
}

export default MoveListsContainer