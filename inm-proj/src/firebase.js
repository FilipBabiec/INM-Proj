// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCwI_e6dYrg3Zcxm1UgPl9ikUEVP2qhG4",
  authDomain: "vtms-596a9.firebaseapp.com",
  projectId: "vtms-596a9",
  storageBucket: "vtms-596a9.appspot.com",
  messagingSenderId: "1075749610805",
  appId: "1:1075749610805:web:e6aab465311da24763987c",
  measurementId: "G-JFPSEDSCH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);