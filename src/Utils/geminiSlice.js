import {createSlice} from '@reduxjs/toolkit';

const geminiSlice = createSlice({
    name : 'gemini',
    initialState : {
        movieNames : null ,
        movieResults : null
    },
    reducers : {
        // toggleGeminiSeachView : (state) => {
        //     state.showGeminiSearch = !state.showGeminiSearch;
        // },
        addGeminiMovieResults : (state,action) => {
          const {movieNames, movieResults } = action.payload ;
          state.movieNames = movieNames;
          state.movieResults = movieResults;
        },
        // toggleSearch : (state, action) =>{
        //     state.search = action.payload
        // }
    }
})


export const { addGeminiMovieResults} = geminiSlice.actions;
export default geminiSlice.reducer;

