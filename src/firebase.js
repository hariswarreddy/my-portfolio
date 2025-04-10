// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfrbp2uf6Q0pNPqnqAzhqfHXirOXXs2B0",
  authDomain: "hariswarreddyportfolio.firebaseapp.com",
  projectId: "hariswarreddyportfolio",
  storageBucket: "hariswarreddyportfolio.firebasestorage.app",
  messagingSenderId: "796541598349",
  appId: "1:796541598349:web:f1b2a59d876caae7a380c4",
  measurementId: "G-XT8TZDCXMC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();