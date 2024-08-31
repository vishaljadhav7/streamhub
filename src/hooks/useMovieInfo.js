import  {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS, STATUSES, RECOMMENDATION_API,  REVIEWS_API  } from "../Utils/constants";
import { setMovieCache } from "../Utils/movieAndSeriesSlice";

export function useMovieInfo(movieId){
    const dispatch = useDispatch();
    const movieCache = useSelector((state) => (state.movieAndSeries.moviesCache))
    const [movieData, setMovieData] = useState({})
    const [recommendations, setRecommendations] = useState({})
    const [status, setStatus] = useState(STATUSES.IDLE)
    const [reviews, setReviews] = useState({})
    const [videos, setVideos] = useState({})


    useEffect(() => {
        async function fetchMovie() {
          try {
            setStatus(STATUSES.LOADING)
            const [movieResponse, recommendResponse, reviewResponse , videosResponse] = await Promise.all([
              fetch(`https://api.themoviedb.org/3/movie/${movieId}`, API_OPTIONS), 
              fetch(RECOMMENDATION_API + movieId + "/recommendations", API_OPTIONS),
              fetch(REVIEWS_API + movieId + "/reviews", API_OPTIONS),
              fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS), // https://api.themoviedb.org/3/movie/movie_id/videos
            ])
            const [moviesJsonData, recommendJsonData, reviewJsonData, videosJsonData] = await Promise.all([
              movieResponse.json(), recommendResponse.json(), reviewResponse.json(), videosResponse.json()
            ])
    
            dispatch(setMovieCache({
              id: movieId,
              movieInfo: moviesJsonData,
              recommendInfo: recommendJsonData,
              reviewInfo: reviewJsonData,
              videosInfo : videosJsonData
            }))
            setMovieData(moviesJsonData)
            setRecommendations(recommendJsonData)
            setReviews(reviewJsonData)
            setVideos(videosJsonData)
            setStatus(STATUSES.IDLE)
          } catch (error) {
            setStatus(STATUSES.ERROR)
          }
        }
    
        if (movieCache[movieId]) {
            // console.log("not Fetching useMovieInfo")
          setMovieData(movieCache[movieId].movieInfo)
          setRecommendations(movieCache[movieId].recommendInfo)
          setReviews(movieCache[movieId].reviewInfo);
          setVideos(movieCache[movieId].videosInfo )
        } else {
          fetchMovie();
        }
    
      }, [])
    

      return {movieData, recommendations, status, reviews, videos}
 
}