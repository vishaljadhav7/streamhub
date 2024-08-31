import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

// import useThoseUpcomingMovies from '../hooks/useThoseUpcomingMovies';

const BrowseMenu = () => {


  return (
    <div className='w-screen'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default BrowseMenu