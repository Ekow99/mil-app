// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuvn9ya1F8kuZomZBHTw258qlfbGTE6K8",
  authDomain: "clone-b445b.firebaseapp.com",
  projectId: "clone-b445b",
  storageBucket: "clone-b445b.appspot.com",
  messagingSenderId: "48170437142",
  appId: "1:48170437142:web:5063c56e34ee8233884337",
  measurementId: "G-42PN69JLZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);