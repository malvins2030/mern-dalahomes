// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-dalahomes.firebaseapp.com",
  projectId: "mern-dalahomes",
  storageBucket: "mern-dalahomes.appspot.com",
  messagingSenderId: "597898573761",
  appId: "1:597898573761:web:6908d16e3fb781a73c2140",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
