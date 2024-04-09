import Navbar from './Navbar'
import useThoseNowPlayingMovies from '../hooks/useThoseNowPlayingMovies'
import MainContainer from './MainContainer';
import MoveListsContainer from './MoveListsContainer';

const BrowseMenu = () => {
  useThoseNowPlayingMovies();

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