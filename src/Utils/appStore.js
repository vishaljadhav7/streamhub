import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './allMoviesNSeriesSlice';
import geminiReducer from './geminiSlice';
import configReducer from './configSlice';
import movieAndSeriesReducer from './movieAndSeriesSlice';
import filterReducer from './filterSlice';

const  appStore = configureStore({
    reducer : {
       user : userReducer ,
       movies : moviesReducer,
       gemini : geminiReducer,
       config : configReducer,
       movieAndSeries : movieAndSeriesReducer,
       filters : filterReducer
    }
})

export default appStore;
