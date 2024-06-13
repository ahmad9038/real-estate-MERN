// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7ab71.firebaseapp.com",
  projectId: "mern-estate-7ab71",
  storageBucket: "mern-estate-7ab71.appspot.com",
  messagingSenderId: "823990394312",
  appId: "1:823990394312:web:0d19886716b8dc449e74fd",
  measurementId: "G-74ZD9RREG0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
