import React from 'react'
import useThatMovieTrailer from '../hooks/useThatMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
  useThatMovieTrailer(movieId);
  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)

  return (
    <div className='w-[100%]'>
      <iframe 
     className='w-full aspect-video'
      src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1" } // + "?&autoplay=1&mute=1" ---> for autoplay
      title="YouTube video player" 
     ></iframe>
    </div>
  )
}

export default VideoBackground


/*
<iframe width="560" 
className='w-full aspect-video' src={`https://www.youtube.com/embed/${key}`} 
title="YouTube video player" 
></iframe>
*/