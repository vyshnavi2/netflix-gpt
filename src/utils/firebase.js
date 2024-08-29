// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoB-7UWTh3fu_Za97DGulXBkf2ANBPOYA",
  authDomain: "netflix-gpt-3bcd2.firebaseapp.com",
  projectId: "netflix-gpt-3bcd2",
  storageBucket: "netflix-gpt-3bcd2.appspot.com",
  messagingSenderId: "287081531641",
  appId: "1:287081531641:web:c29aa2a3a8304492143a28",
  measurementId: "G-RCTQ987DDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();