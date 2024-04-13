import {createSlice} from '@reduxjs/toolkit';

const geminiSlice = createSlice({
    name : 'gemini',
    initialState : {
        showGeminiSearch : false,
        movieNames : null ,
        movieResults : null
    },
    reducers : {
        toggleGeminiSeachView : (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        addGeminiMovieResults : (state,action) => {
          const {movieNames, movieResults } = action.payload ;
          state.movieNames = movieNames;
          state.movieResults = movieResults;
        }
    }
})


export const {toggleGeminiSeachView, addGeminiMovieResults} = geminiSlice.actions;
export default geminiSlice.reducer;

