import React from 'react'
import Login from './Login'
import BrowseMenu from './BrowseMenu'
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const Body = () => {

   const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>,
    },
    {
      path : "/BrowseMenu",
      element : <BrowseMenu/>,
    }
  ])


  
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body