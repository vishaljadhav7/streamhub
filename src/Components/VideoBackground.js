import React from 'react'
import useThatMovieTrailer from '../hooks/useThatMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
  useThatMovieTrailer(movieId);
  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)

  return (
    <div>
      <iframe 
      width="560" 
      height="315" 
      src={"https://www.youtube.com/embed/"+trailerVideo?.key}
      title="YouTube video player" 
     ></iframe>
    </div>
  )
}

export default VideoBackground