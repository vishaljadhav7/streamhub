import Navbar from './Navbar'
import useThoseNowPlayingMovies from '../hooks/useThoseNowPlayingMovies'
import MainContainer from './MainContainer';
import MoveListsContainer from './MoveListsContainer';
import useThosePopularMovies from '../hooks/useThosePopularMovies';
import useThoseTopRatedMovies from '../hooks/useThoseTopRatedMovies';

const BrowseMenu = () => {
  useThoseNowPlayingMovies();
  useThosePopularMovies();
  useThoseTopRatedMovies();

  return (
    <div>
      <Navbar/>
       <MainContainer/>
       <MoveListsContainer/>
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