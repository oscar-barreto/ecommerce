// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjrOIgLb_7gmZw6-zDTgwQ8Bcqt4frE8A",
  authDomain: "e-shop-8e4c5.firebaseapp.com",
  projectId: "e-shop-8e4c5",
  storageBucket: "e-shop-8e4c5.appspot.com",
  messagingSenderId: "200679149938",
  appId: "1:200679149938:web:1bd05c7564e20a054acdeb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;