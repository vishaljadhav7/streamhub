import React, {useEffect} from 'react'

import {auth} from '../utils/Firebase';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user)
   
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       const {uid,email,displayName, photoURL} = user;
       dispatch(
         addUser(
           {uid:uid ,
           email: email, 
           displayName: displayName, 
           photoURL : photoURL
         }));
       navigate("/BrowseMenu") 
     } else {
       // User is signed out
       dispatch(removeUser());
       navigate("/") 
     }
   });

   return () => {
         unsubscribe(); // unsubscribe happens when component unmounts
   }

  }, []) // using this useEffect both inside router as well as central place 

   const handleSignOut = () =>{
  
      signOut(auth).then(() => {
       // Sign-out successful.
      //  navigate("/")
      }).catch((error) => {
       // An error happened.
       navigate("/error");
      });
  }
  
  return (
    <div
    className='absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between '
    >
       <img
         className='h-[60px] w-[180px] object-cover rounded-lg' 
         src="/Nav_logo.jpg" 
         alt='logo'
       />
       {user && 
        <div className='mr-4 p-1 '>
        <img className='w-8 ml-4' src='/user.png'/>
        <button
        onClick={handleSignOut} 
        className='text-teal-500  font-semibold'
        >
          Sign Out
        </button>
       </div>
       }
    </div>
 
  )
}

export default Navbar