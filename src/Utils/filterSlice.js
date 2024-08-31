import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { SUGGESTIONS_API, API_OPTIONS, SERIES_SUGGESTION_API } from "./constants";

const initialState = {
    filteredData : [], // FilteredMovieContianer
    discoverMovie : null,
    discoverSeries : null,
    search : false,
    allMovieGenres : null,
    allSeriesGenres : null,
    movieSuggestions : [],
    seriesSuggestions : [],
    cache : {
        movies : {},
        series : {}
    },
    error : null
}

export const fetchMovieSuggestion = createAsyncThunk('search/fetchMovies', async ({ query, signal }) => {
  if (!query) return;
  const response = await fetch(SUGGESTIONS_API + query, { ...API_OPTIONS, signal });
  const jsonData = await response.json();
  return jsonData;
});

export const fetchSeriesSuggestion = createAsyncThunk('search/fetchSeries', async ({ query, signal }) => {
  if (!query) return;
  const response = await fetch(SERIES_SUGGESTION_API + query, { ...API_OPTIONS, signal });
  const jsonData = await response.json();
  return jsonData;
});

const filterSlice = createSlice({
    name : "filters",
    initialState,
    reducers : {
      addFiltersData : (state, action) =>{
          state.allMovieGenres = action.payload.genres;
          state.discoverMovie = action.payload.movies;
      },
      filterDiscoverMovies : (state, action) => {
          const filterStatus = action.payload; 
          const newFilteredData = [...current(state.discoverMovie)];
          state.filteredData = newFilteredData.filter((item) => (
             item.genre_ids.includes(filterStatus.id)
          ))      
       },
       clearResults: (state) => {
        state.movies = [];
        state.series = [];
      },
      toggleSearch : (state, action) =>{
        state.search = action.payload
    }
    },
    extraReducers : (builder) => {
        builder 

        .addCase(fetchMovieSuggestion.fulfilled, (state, action) => {
            // const query = action.meta.arg;
            // state.cache.movies[query] = action.payload.results;
            state.movieSuggestions = action.payload.results;
          })

          .addCase(fetchSeriesSuggestion.fulfilled, (state, action) => {
            // const query = action.meta.arg;
            // state.cache.series[query] = action.payload.results;
            state.seriesSuggestions = action.payload.results;
          })

          .addCase(fetchMovieSuggestion.rejected, (state, action) => {
            state.error = action.error.message;
          })

          .addCase(fetchSeriesSuggestion.rejected, (state, action) => {
            state.error = action.error.message;
          });
    }
})



export default filterSlice.reducer;

export const {addFiltersData, filterDiscoverMovies, clearResults, toggleSearch } = filterSlice.actions