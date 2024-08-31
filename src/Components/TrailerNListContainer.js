
import React  from 'react' //  useSelector, GeminiPro
import MainContainer from './MainContainer';
import ListsContainer from './ListsContainer';
import useThoseNowPlayingMovies from '../hooks/useThoseNowPlayingMovies';
import useThosePopularSeries from '../hooks/useThosePopularSeries';
import useThoseTopRatedMovies from '../hooks/useThoseTopRatedMovies';
import { useSelector } from 'react-redux';
import FilterPanel from './FilterPanel';
import DiscoverMovies from './DiscoverMovies';


const TrailerNListContainer = () => {
    useThoseNowPlayingMovies();
    useThosePopularSeries();
    useThoseTopRatedMovies();

  const {filteredData} = useSelector((state) => state.filters);



  return (
    <div>
         <MainContainer/>

          <FilterPanel/>

          <ListsContainer/>    
    </div>  
  )
}

export default TrailerNListContainer;