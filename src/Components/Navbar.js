import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  const handleSignOut = () =>{
  
      signOut(auth).then(() => {
       // Sign-out successful.
       navigate("/")
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