import React, { useEffect } from 'react'
import Login from './Login'
import BrowseMenu from './BrowseMenu'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/Firebase';
import {useDispatch} from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice'

const Body = () => {
   const dispatch = useDispatch();
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

   useEffect(()=>{
     onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName, photoURL}= user;
        dispatch(
          addUser(
            {uid:uid ,
            email: email, 
            displayName: displayName, 
            photoURL : photoURL
          }))
        
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

   }, [])
  
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body