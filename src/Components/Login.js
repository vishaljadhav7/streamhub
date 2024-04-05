import React , {useState, useRef} from 'react'
import Navbar from './Navbar'
import {checkValidData} from '../utils/validate'


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [message,setMessage] = useState(null);

  
  const email = useRef(null);
  const password = useRef(null);


  const handleSubmit = () => {
    // validate the form data 
    // checkValidData(email, password)
    //  console.log(email.current.value," -------- ", password.current.value );
   const receivedMessage = checkValidData(email.current.value, password.current.value);
   // console.log(receivedMessage)
   setMessage(receivedMessage);
  }

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Navbar/>
      
      <div className='absolute'>
        <img src='/movie_bg.jpg'/>
      </div>

      <form className='w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'
         onSubmit={(e)=>{e.preventDefault();}}
        >

          <h1 className='font-bold text-3xl py-4'>
            {isSignIn? "Sign In" : " Sign Up" }   
          </h1>
            
          {!isSignIn && <input type='text' placeholder='Enter your name' className='p-4 my-2 w-full bg-gray-500 rounded-lg'/>}


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

export default Login