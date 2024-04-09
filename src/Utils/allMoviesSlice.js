import { createSlice } from "@reduxjs/toolkit";


const allMoviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload ;
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo= action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo} = allMoviesSlice.actions ;
export default allMoviesSlice.reducer ;