import React from 'react'

const VideoTitle = ({title , overview}) => {
  
  return (
    <div className='w-screen aspect-video pt-[15%] px-2 md:px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-lg md:text-2xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overview}</p>
      <div>
        <button className='md:p-4 md:px-16 py-3  px-6  text-xl bg-opacity-50 rounded-lg bg-white text-black'>Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle