import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { STATUSES, IMG_CDN_URL } from '../Utils/constants'
import { useSeriesInfo } from '../hooks/useSeriesInfo'
import Shimmer from './Shimmer'
import RecommendationSection from './RecommendationSection'
import ReviewSection from './ReviewSection'
import VideosCarousel from './VideosCarousel'
import { LuPlayCircle } from "react-icons/lu";

const SeriesContainer = () => {

  const { seriesId } = useParams();

  const [toggleView, setToggleView] = useState(true)

  const {seriesData, recommendations, status, reviews, videos} = useSeriesInfo(seriesId)

  const [showVideos, setShowVideos] = useState(false)
  
  const [currIdx, setCurrIdx] = useState(0);

  const handleNext = () => {
    setCurrIdx(prev => prev < videos.results?.length - 1 ?  prev + 1 : 0 )
  }

  const handlePrev = () => {
    setCurrIdx(prev => prev > 0 ? prev - 1 : videos?.results?.length - 1 )
  }

  const closeCarousel = () => {
    setShowVideos(false)
  }


  const { adult, genres, overview, poster_path, first_air_date, number_of_seasons, number_of_episodes ,name
    , vote_average } = seriesData;
  // console.log(videos)

  if (status === STATUSES.LOADING) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 pt-[72px]">
      <div className="w-full max-w-full mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <img className="w-full max-w-md rounded-lg shadow-2xl" src={IMG_CDN_URL + poster_path} alt={name} />
        </div>

        <div className="flex-1 text-white">
          <h1 className="text-5xl font-extrabold mb-6">{name}</h1>
          <p className="text-lg text-gray-300 mb-8">{overview}</p>

          <div className="flex flex-wrap items-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27l6.18 3.73-1.64-7.03L21.64 9.1l-7.19-.61L12 2 9.55 8.49l-7.19.61 5.46 4.87-1.64 7.03L12 17.27z" />
              </svg>
              <span className="text-xl font-semibold">{vote_average}/10</span>
            </div>

            <div className="bg-indigo-700 bg-opacity-90 p-3 rounded-lg">
              <h3 className="text-xl font-semibold text-white">Released on: {first_air_date}</h3>
            </div>

            <div className="bg-teal-700 bg-opacity-90 p-3 rounded-lg">
              <h3 className="text-xl font-semibold text-white">Seasons: {number_of_seasons}</h3>
            </div>
            <div className="bg-slate-600 bg-opacity-90 p-3 rounded-lg">
              <h3 className="text-xl font-semibold text-white">Episodes: {number_of_episodes}</h3>
            </div>


            <div className={`bg-${adult ? 'red' : 'green'}-600 bg-opacity-90 p-3 rounded-lg`}>
              <h3 className="text-xl font-semibold text-white">
                {adult ? "18+ (Adult)" : "UA (Parental Guidance)"}
              </h3>
            </div>
          </div>

          <div className='bg-teal-500 bg-opacity-90 p-2 rounded-lg mb-6 flex items-center gap-4 w-40 cursor-pointer transition transform  hover:bg-teal-300 hover:scale-105  hover:shadow-lg' onClick={()=>setShowVideos(true)}>
             <button className='text-6xl '><LuPlayCircle/> </button>
             <h3 className="text-xl font-semibold text-white">Trailers</h3>

           </div>

          <ul className="flex flex-wrap gap-4">
            {genres?.map((genre) => (
              <li
                key={genre.id}
                className="bg-fuchsia-600 text-white px-4 py-2 rounded-full transition transform hover:bg-fuchsia-400 hover:scale-105 hover:shadow-lg"
              >
                {genre.name}
              </li>
            ))}
          </ul>

          
        </div>
      </div>

      <div className='flex justify-center items-center gap-3 text-2xl md:text-3xl'>
        <button className='text-white   text-center my-10' onClick={() => setToggleView(true)}>More Like This</button>
        <span className='text-4xl text-white'> | </span>
        <button className='text-white   text-center my-10' onClick={() => setToggleView(false)}>Reviews</button>
      </div>

      { showVideos &&  <VideosCarousel handleNext={handleNext} handlePrev={handlePrev} allVideos={videos?.results} currIdx={currIdx} closeCarousel={closeCarousel}/>}

 
      {toggleView ? (

        <RecommendationSection allRecomendations={recommendations}  />
      ) : (
        <ReviewSection reviewsResults={reviews.results}/>
      )}
    </div>
  )
}

export default SeriesContainer
