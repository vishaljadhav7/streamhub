export const USER_AVATAR = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAkon&psig=AOvVaw3NUhmShPx-GDcBbaGDqENg&ust=1712593783765000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOD14_vCsIUDFQAAAAAdAAAAABAE"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: " Bearer " + process.env.REACT_APP_TMBD_KEY 
    }
  };
  

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"; 


export const SUPPORTED_LANGUAGES = [
  {identifier : "en" , name : "English"},
  {identifier : "hindi" , name : "Hindi"},
  {identifier : "spanish" , name : "Spanish"},
]


export const GEMINI_AI_KEY = process.env.REACT_APP_GEMINI_AI_KEY;