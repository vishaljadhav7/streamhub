import React , {useState, useRef} from 'react' ;
import Navbar from './Navbar' ;
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../utils/Firebase' ;
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice' ;
import {USER_AVATAR}  from '../utils/constants' ;

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [message,setMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();


  const handleSubmit = () => {
    // validate the form data 
    // checkValidData(email, password)
    //  console.log(email.current.value," -------- ", password.current.value );
    const receivedMessage = checkValidData(email.current.value, password.current.value);

    // console.log(receivedMessage)
    setMessage(receivedMessage);

    if(receivedMessage) return;
 
    if(!isSignIn){
    //sign up logic 
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed up & using the updateProfile API 
        const user = userCredential.user;
        // console.log(" a new user " , user)
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: USER_AVATAR,
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName, photoURL}= auth.currentUser;
          dispatch(
            addUser(
            {
              uid:uid ,
              email: email , 
              displayName: displayName , 
              photoURL : photoURL
            }))
          
          // navigate("/BrowseMenu")
        }).catch((error) => {
          // An error occurred
        
        }); 
        // navigate("/BrowseMenu")
     })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setMessage(error.code + "  " + error.message );
      });
    }
    else
    { 
    // sign in logic 
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log("already registered",user)
        // navigate("/BrowseMenu")
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(error.code + "-" + error.message )
      });
    } 
 }

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Navbar/>
      
      <div className="absolute w-screen h-screen">
        <img
         className="absolute w-[100%] h-[100%] object-cover"
        src="/Background.jpg"/>
      </div>

      <form className='w-3/12  absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'
         onSubmit={(e)=>{e.preventDefault();}}
        >

          <h1 className='font-bold text-3xl py-4'>
            {isSignIn? "Sign In" : " Sign Up" }   
          </h1>
            
          {!isSignIn 
          && 
          <input
          ref={name} 
          type='text' 
          placeholder='Enter your name' 
          className='p-4 my-2 w-full bg-gray-500 rounded-lg'
          />}


          <input 
            type='text' 
            placeholder='Enter your email' 
            className='p-4 my-2 w-full bg-gray-500 rounded-lg'
            ref={email}
          />

          <input 
            type='password' 
            placeholder='Enter your password' 
            className='p-4 my-2 w-full bg-gray-500 rounded-lg'
            ref={password}
          />
             
          <p className="text-red-500 font-bold text-lg py-2">{message}</p>  

          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleSubmit}
          >
          {isSignIn? "Sign In" : " Sign Up" }
          </button>

          <p className='py-4 cursor-pointer' 
              onClick={toggleSignInForm}
          >
          {isSignIn? " New here? Sign Up Now" : "Already a user? Sign in now " }
          </p>
        </form>

    </div>
  )
}

export default Login;