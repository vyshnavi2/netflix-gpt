import {React,useEffect} from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/firebase'
import { useSelector, useDispatch } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)

  useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName, photoURL} = user;
        dispatch(
          addUser({
              uid:uid, 
              email:email, 
              displayName: displayName, 
              photoURL:photoURL
            }));
        navigate("/browse"); 
      } else {
        dispatch(removeUser());
       navigate("/"); // navigate user to the main page on sign out
      }
    });
    return ()=>unSubscribe; // unsubscribe it when the header component unloads/unmounts
}, []);

const handleSignOut =() =>{
 signOut(auth).then(() => {
  //navigate("/");
 }).catch((error) => {
  navigate("/error");
 });
  }
  return (
   
 <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
 <img className='w-44' 
 src={NETFLIX_LOGO} 
 alt='Logo'>
 </img>
 {user &&(
  <div className='flex p-2'>
  <img className='w-12 h-12'
   src = {user?.photoURL}
   alt='user-avatar'>  
   </img>
   <button className='font-bold text-white' onClick={handleSignOut}>Signout</button>
 </div>
)}
</div>
  )
}

export default Header