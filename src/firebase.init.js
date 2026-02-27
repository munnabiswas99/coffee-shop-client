// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTEOLQr_vi8IK-IS7jGdadtqmW55Yl3gw",
  authDomain: "coffee-shop-auth-aff53.firebaseapp.com",
  projectId: "coffee-shop-auth-aff53",
  storageBucket: "coffee-shop-auth-aff53.firebasestorage.app",
  messagingSenderId: "1016407882634",
  appId: "1:1016407882634:web:ed5c867fdc981fa75a6673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);