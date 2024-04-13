import Navbar from './Navbar'
import useThoseNowPlayingMovies from '../hooks/useThoseNowPlayingMovies'
import MainContainer from './MainContainer';
import MoveListsContainer from './MoveListsContainer';
import useThosePopularMovies from '../hooks/useThosePopularMovies';
import useThoseTopRatedMovies from '../hooks/useThoseTopRatedMovies';
import { useSelector } from 'react-redux';
// import useThoseUpcomingMovies from '../hooks/useThoseUpcomingMovies';
import GeminiPro from './GeminiPro';


const BrowseMenu = () => {
  useThoseNowPlayingMovies();
  useThosePopularMovies();
  useThoseTopRatedMovies();
  // useThoseUpcomingMovies(); 
  const geminiSearchView = useSelector(store => store.gemini.showGeminiSearch)

  return (
    <div>
      <Navbar/>

      {geminiSearchView ? <GeminiPro/> :
        <>
         <MainContainer/>
         <MoveListsContainer/>  
        </>
      }

      {/* {
        Dividing the whole browse page into two sections
          - MainContainer 
              - VideoBackground
              - Video Title
          - MovieListsConTainer
              - MovieLists * n
                 - Cards * n     

      } */}
    </div>
  )
}

export default BrowseMenu