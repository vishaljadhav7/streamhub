import React from 'react'
import {IMG_CDN_URL } from '../Utils/constants'

const Card = ({poster_path}) => {

 if(poster_path === null) return ;   

  return (
    <div className='w-32 md:w-40 pr-3 '>
        <img alt="Movie Card" src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default Card