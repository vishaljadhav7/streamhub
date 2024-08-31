import React, { useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const DiscoverMovies = ({filteredMovies}) => {
   useEffect(()=>{
    
   })
  return (
    <div className='flex flex-wrap items-center justify-center gap-3 p-5 bg-black w-screen'> 
       {filteredMovies.map((item) => (
       <Link key={item.id} to={`movie/${item.id}`}> 
         <Card key={item.id} poster_path={item.poster_path}/>
        </Link>
       ))}
    </div>
  )
}

export default DiscoverMovies


// poster_path

/*
 <Link key={item.id} to={`movie/${movie.id}`}> 
   <Card key={item.id} poster_path={item.poster_path}/>
 </Link>
*/ 