export const USER_AVATAR = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAkon&psig=AOvVaw3NUhmShPx-GDcBbaGDqENg&ust=1712593783765000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOD14_vCsIUDFQAAAAAdAAAAABAE"


  

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"; 


export const SUPPORTED_LANGUAGES = [
  {identifier : "en" , name : "English"},
  {identifier : "hindi" , name : "Hindi"},
  {identifier : "spanish" , name : "Spanish"},
]




export const SIGN_IN_IMG_CDN = 'https://cnbl-cdn.bamgrid.com/assets/186e8d6e466eb3623bf5d2807510e4c24c582f4896dc0e822f662fa0ea35130c/original'

export const STATUSES = Object.freeze({
  LOADING : "loading",
  ERROR : "error",
  IDLE : "idle"
})

export const SUGGESTIONS_API = 'https://api.themoviedb.org/3/search/movie?query=';

export const RECOMMENDATION_API = 'https://api.themoviedb.org/3/movie/';

export const SERIES_SUGGESTION_API = 'https://api.themoviedb.org/3/search/tv?query='

export const REVIEWS_API = 'https://api.themoviedb.org/3/movie/' //  /reviews

export const ALL_MOVIE_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

export const ALL_SERIES_GENRES = 'https://api.themoviedb.org/3/genre/tv/list?language=en';

export const DISCOVER_MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';



export const navItems = [
  {
    id : 1240,
    label : "Home",
    path : '/BrowseMenu',
  },
  {
    id : 4923,
    label : "AI Search",
    path : "GeminiSearch",
  }
]