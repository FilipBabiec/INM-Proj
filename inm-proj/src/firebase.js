// //VTMS
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCCwI_e6dYrg3Zcxm1UgPl9ikUEVP2qhG4",
//   authDomain: "vtms-596a9.firebaseapp.com",
//   projectId: "vtms-596a9",
//   storageBucket: "vtms-596a9.appspot.com",
//   messagingSenderId: "1075749610805",
//   appId: "1:1075749610805:web:e6aab465311da24763987c",
//   measurementId: "G-JFPSEDSCH2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const db = getFirestore(app);


// //VTMStest
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-eXsXLG462U9_TLAzgCSH9Q9GfYQ-cs",
  authDomain: "vtmstest.firebaseapp.com",
  projectId: "vtmstest",
  storageBucket: "vtmstest.appspot.com",
  messagingSenderId: "722700458117",
  appId: "1:722700458117:web:d22e4a4675fc1a87e3f1ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);