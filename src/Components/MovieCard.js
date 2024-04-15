import React from 'react'
import {IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
 if(!poster_path) return ;   

  return (
    <div className='w-36 md:w-48 pr-3 '>
        <img   alt="Movie Card" src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard