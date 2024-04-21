import React, {useEffect} from 'react'
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import {auth} from '../utils/Firebase';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGeminiSeachView } from '../utils/geminiSlice';
import { changeLanguage } from '../utils/configSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user)
  const geminiSeachView = useSelector(store => store.gemini.showGeminiSearch)
  
   
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

  const toggleGptSearch = () =>{
    dispatch(toggleGeminiSeachView());
  }

  const handleLanguageChange =(event)=>{
    //  console.log("sdvsfcsdzcds   " , event.target.value)
    dispatch(changeLanguage(event.target.value))
  }
  
  return (
    <div
    className='absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between flex-col md:flex-row '
    >
       <img
         className='h-[60px] w-[180px] object-cover rounded-lg mx-auto md:mx-0' 
         src= "/nav_logo.png" 
         alt='logo'
       />
       {user && 
        <div className='mr-4 p-1 flex  justify-center md:justify-normal'>
           { geminiSeachView ?  <select className='p-2 m-2  text-white rounded-lg bg-gray-800'  onChange={handleLanguageChange}>
             {SUPPORTED_LANGUAGES.map(lang=>
              <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
             </option>)}
           </select>  : " "   }
          

          <button className='text-white py-2 px-4 m-2 bg-fuchsia-600 rounded-lg opacity-80  font-semibold'
          onClick={toggleGptSearch}
          >
           {geminiSeachView ? "Home Page" : "Gemini Search" }
          </button>
          <div className='ml-6'>
          <img className='w-8 ml-4 opacity-80' src='/user.png'/>
           <button
           onClick={handleSignOut} 
           className='text-teal-500  font-semibold '
           >
             Sign Out
           </button>
          </div>
       </div>
       }
    </div>
 
  )
}

export default Navbar