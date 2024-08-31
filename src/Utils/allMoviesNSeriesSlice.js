import { createSlice} from "@reduxjs/toolkit";


const allMoviesNSeriesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularSeries : null,
        topRatedMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload ;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularSeries : (state, action) => {
            state.popularSeries = action.payload;
        },
        addTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularSeries, addTopRatedMovies} = allMoviesNSeriesSlice.actions ;
export default allMoviesNSeriesSlice.reducer ;