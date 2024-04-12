import Navbar from './Navbar'
import useThoseNowPlayingMovies from '../hooks/useThoseNowPlayingMovies'
import MainContainer from './MainContainer';
import MoveListsContainer from './MoveListsContainer';
import useThosePopularMovies from '../hooks/useThosePopularMovies';
import useThoseTopRatedMovies from '../hooks/useThoseTopRatedMovies';
import { useSelector } from 'react-redux';
// import useThoseUpcomingMovies from '../hooks/useThoseUpcomingMovies';
import GptTurbo from './GptTurbo'


const BrowseMenu = () => {
  useThoseNowPlayingMovies();
  useThosePopularMovies();
  useThoseTopRatedMovies();
  // useThoseUpcomingMovies(); 
  const gptSearchView = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Navbar/>

      {gptSearchView ? <GptTurbo/> :
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