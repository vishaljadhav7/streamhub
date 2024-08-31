import  {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS, STATUSES  } from "../Utils/constants";
import { setSeriesCache } from "../Utils/movieAndSeriesSlice";

export function useSeriesInfo(seriesId){
    const dispatch = useDispatch();
    const seriesCache = useSelector((state) => (state.movieAndSeries.seriesCache))
    const [seriesData, setSeriesData] = useState({})
    const [recommendations, setRecommendations] = useState({})
    const [status, setStatus] = useState(STATUSES.IDLE)
    const [reviews, setReviews] = useState({})
    const [videos, setVideos] = useState({})


    useEffect(() => {
        async function fetchSeries() {
          try {
            setStatus(STATUSES.LOADING)
            const [seriesResponse, recommendResponse, reviewResponse, videosResponse] = await Promise.all([
              fetch(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, API_OPTIONS), 
              fetch( "https://api.themoviedb.org/3/tv/" + seriesId + "/recommendations", API_OPTIONS),
              fetch("https://api.themoviedb.org/3/tv/ " + seriesId + "/reviews", API_OPTIONS),
              fetch("https://api.themoviedb.org/3/tv/ " + seriesId + "/videos", API_OPTIONS)  // https://api.themoviedb.org/3/tv/1396/videos
            ])
            const [seriesJsonData, recommendJsonData, reviewJsonData, videosJsonData] = await Promise.all([
                seriesResponse.json(), recommendResponse.json(), reviewResponse.json(), videosResponse.json()
            ])
     
            dispatch(setSeriesCache({
              id: seriesId,
              seriesInfo: seriesJsonData,
              recommendInfo: recommendJsonData,
              reviewInfo: reviewJsonData,
              videosInfo : videosJsonData,
            }))
            setSeriesData(seriesJsonData)
            setRecommendations(recommendJsonData)
            setReviews(reviewJsonData)
            setVideos(videosJsonData)
            setStatus(STATUSES.IDLE)
          } catch (error) {
            setStatus(STATUSES.ERROR)
          }
        }
    
        if (seriesCache[seriesId]) {
            // console.log("not Fetching useMovieInfo")
          setSeriesData(seriesCache[seriesId].seriesInfo)
          setRecommendations(seriesCache[seriesId].recommendInfo)
          setReviews(seriesCache[seriesId].reviewInfo);
          setVideos(seriesCache[seriesId].videosInfo)
        } else {
            fetchSeries();
        }
    
      }, [])
    

      return {seriesData, recommendations, status, reviews, videos}
 
}