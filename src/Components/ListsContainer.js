import React from 'react'
import List from './List'
import {useSelector} from 'react-redux'



const ListsContainer = () => {
  const movies = useSelector(store=>store.movies)

  //  console.log("here movies.popularSeries ", movies.popularSeries);
  return (
    <div className='bg-black w-screen'>
      <div className='relative z-20 '> 

      <List title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      
      <List title={"Top Rated Movies"} movies={movies.topRatedMovies}/>

      <List title={"Popular Series"} movies={[]} series ={movies.popularSeries}/>
      
      </div>
    </div>

  )
}

export default ListsContainer