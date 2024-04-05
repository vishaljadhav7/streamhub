// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOAIN8l273tVQpWek_372zkMEc_pW4HP0",
  authDomain: "streamhub-40911.firebaseapp.com",
  projectId: "streamhub-40911",
  storageBucket: "streamhub-40911.appspot.com",
  messagingSenderId: "513119967550",
  appId: "1:513119967550:web:e2f6fbefc7e29f6a23346f",
  measurementId: "G-XWG0FPFPXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);