import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider} from 'react-router-dom';
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Body = () => {

    const dispatch = useDispatch();
   // const navigate = useNavigate();

   const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
]);

    useEffect(()=>{

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName, photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
            //navigate("/browser"); //navigate user to the browser page on sign in 
            // error: useNavigate() may be used only in the context of a <Router> component.
            //other way is to use window.location.href - but not recommended
            // other way is to navigate from some other place - following this way now
            // place the approuter code in main app.js file
          } else {
            dispatch(removeUser());
           // navigate("/"); // navigate user to the main page on sign out
          }
        });
    }, []);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body