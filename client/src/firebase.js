// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-eec6a.firebaseapp.com",
  projectId: "mern-blog-eec6a",
  storageBucket: "mern-blog-eec6a.appspot.com",
  messagingSenderId: "158354954893",
  appId: "1:158354954893:web:8fb6097b6d3cbf510860c4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
