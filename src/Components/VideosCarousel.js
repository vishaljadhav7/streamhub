import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const VideosCarousel = ({handleNext, handlePrev, allVideos = [], currIdx, closeCarousel}) => {

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg backdrop-filter bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out'>
    <div className='w-[80%] h-[70%] flex  overflow-x-hidden ' >
      <button className='text-4xl text-white absolute top-2/4 left-5'  onClick={handlePrev}> <FaAngleLeft/> </button>
      <button className='text-4xl text-white absolute top-2/4 right-5' onClick={handleNext}><FaAngleRight/> </button>
        {allVideos?.length > 0 &&  allVideos?.map( (videoItem, idx)=> {
          return (
            (currIdx === idx) && <iframe  width={1000}
              className='w-[100%] h-[100%]' src={`https://www.youtube.com/embed/${videoItem.key}`} 
              title="YouTube video player" 
            ></iframe>
          )
        } )}  
    </div> 
    <div
    className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition duration-300"
    onClick={closeCarousel}
  >
    X
  </div>
</div>
  )
}

export default VideosCarousel