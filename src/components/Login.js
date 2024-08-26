import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
   const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    
  }
  return (
     <div>
        <Header/>
        <div absolute>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/caf60945-04bd-4265-9ab8-597eeb533007/AU-en-20240820-TRIFECTA-perspective_WEB_7706c7c3-81b5-49a6-996b-a65494adb4e0_medium.jpg' 
          alt='backgroung-img'>
          </img>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
          <input type="text" placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-700'/>
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
          <button className='my-6 p-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
          <p className='py-4 m-4' onClick={toggleSignInForm} cursor-pointer>{isSignInForm ? "New to Netflix ? Sign Up Now":"Already Registered. Sign In Now."}</p>
        </form>
        </div>
  )
}

export default Login