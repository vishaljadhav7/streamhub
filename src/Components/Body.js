import React from 'react'
import Login from './Login'
import BrowseMenu from './BrowseMenu'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import TrailerNListContainer from './TrailerNListContainer'
import MovieContainer from './MovieContainer'
import GeminiPro from './GeminiPro'
import SeriesContainer from './SeriesContainer'


const Body = () => {

   const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>,
    },
    {
      path : "/BrowseMenu",
      element : <BrowseMenu/>,
      children : [
        {
          path: "/BrowseMenu",
          element: <TrailerNListContainer />,
          children : []
        },
        {
          path: "movie/:movieId",  // 0 -> movie , 1 -> series
          element: <MovieContainer />,
          children : []
        },
        {
          path : "GeminiSearch",
          element : <GeminiPro/>
        },
        {
          path : "series/:seriesId",
          element : <SeriesContainer/>
        }
      ]
    }
  ])


  
  return (
    <div className=''>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body