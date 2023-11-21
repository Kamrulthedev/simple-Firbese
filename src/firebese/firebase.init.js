// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM8c3dS1HSVAmNlmpKufRy7InORIEowPM",
  authDomain: "simple-firebase-22db8.firebaseapp.com",
  projectId: "simple-firebase-22db8",
  storageBucket: "simple-firebase-22db8.appspot.com",
  messagingSenderId: "890816157788",
  appId: "1:890816157788:web:5bfee40778f42fce6b2e99",
  measurementId: "G-70G176GMLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;