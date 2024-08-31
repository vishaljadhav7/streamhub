import { createSlice, current } from "@reduxjs/toolkit";

const initialState ={
    allMovies : null,
    allSeries : null,
    moviesCache : {},
    seriesCache : {}
}


const movieAndSeriesSlice = createSlice({
    name : "movieAndSeries",
    initialState,
    reducers : {
        setMovieCache : (state, action) =>{
            const newObj = {...current(state.moviesCache)}
            newObj[action.payload.id] = {
                movieInfo : action.payload.movieInfo,
                recommendInfo : action.payload.recommendInfo,
                reviewInfo : action.payload.reviewInfo,
                videosInfo : action.payload.videosInfo
            }
            state.moviesCache =  newObj;
        },
        setSeriesCache : (state, action) =>{
            const newObj = {...current(state.seriesCache)}
            newObj[action.payload.id] = {
                seriesInfo : action.payload.seriesInfo,
                recommendInfo : action.payload.recommendInfo,
                reviewInfo : action.payload.reviewInfo,
                videosInfo : action.payload.videosInfo
            }
            state.seriesCache =  newObj;
        },
    }
 })


 export const {setMovieCache, setSeriesCache } = movieAndSeriesSlice.actions; 

 export default movieAndSeriesSlice.reducer ;

