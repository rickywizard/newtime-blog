// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "newtime-blog-4c11e.firebaseapp.com",
  projectId: "newtime-blog-4c11e",
  storageBucket: "newtime-blog-4c11e.appspot.com",
  messagingSenderId: "560250775486",
  appId: "1:560250775486:web:d147c53406576a7de73bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);