import React from 'react'

const VideoTitle = ({title , overview}) => {
  
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className=' p-4 px-16 text-xl bg-opacity-50 rounded-lg bg-white text-black'>Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle