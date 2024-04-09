import React from 'react'
import MovieLists from './MovieLists'
import {useSelector} from 'react-redux'
const MoveListsContainer = () => {
  const movies = useSelector(store=>store.movies)
  // console.log("djnanwv  ", nowPlayingMovies);
  return (
    <div>
      <MovieLists title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default MoveListsContainer