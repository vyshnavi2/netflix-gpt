import React, { useRef } from 'react'
import { useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/Validate'
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         updateProfile  
} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from "../utils/userSlice"
import {NETFLIX_BACKGROUND_IMG, PHOTO_URL} from '../utils/constants'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
   const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    
  }
  const handleButtonClick = () =>{
    //validate email, password
    const errMessage = checkValidData(email.current.value, password.current.value);
    setErrorMessage(errMessage);
    if(errMessage) return;
     //sign in /sign up Logic
     if(!isSignInForm)
     {
       //sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
    .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: 
        name.current.value,
        photoURL: PHOTO_URL
    }).then(() => {
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
     // navigate("/browse");
      // ...
    }).catch((error) => {
      setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
  });
  }
  else{

    signInWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
    )
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    //navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
  });
     }
  }
 
  return (
     <>
        <Header/>
        <div className='absolute'>
          <img 
            src={NETFLIX_BACKGROUND_IMG} 
            alt='backgroung-img'>
          </img>
        </div>
        <form onSubmit = {(e)=>e.preventDefault()} 
        className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 
            className='font-bold text-3xl py-4'>
              {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm &&  (
            <input 
              ref={name} 
              type="text" 
              placeholder='Full Name' 
              className='p-4 my-4 w-full bg-gray-700'
            />)}
          <input 
            ref={email} 
            type="text" 
            placeholder='Email or mobile number' 
            className='p-4 my-4 w-full bg-gray-700'
          />
          <input 
            ref={password} 
            type="password" 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700'
          />
          <p 
            className='text-red-500 font-bold text-lg py-2'>
              {errorMessage}
          </p>
          <button 
            className='my-6 p-4 bg-red-700 w-full rounded-lg' 
            onClick={handleButtonClick}>
             {isSignInForm ? "Sign In":"Sign Up"}
          </button>
          <p 
            className='py-4 cursor-pointer' 
            onClick={toggleSignInForm}>
             {isSignInForm ? "New to Netflix ? Sign Up Now":"Already Registered. Sign In Now."}
          </p>
        </form>
        </>
  )
}

export default Login