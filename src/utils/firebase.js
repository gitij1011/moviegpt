// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUKUAvAe_0W62DTBcz6GYty8AJHetZ38",
  authDomain: "moviegpt-81f94.firebaseapp.com",
  projectId: "moviegpt-81f94",
  storageBucket: "moviegpt-81f94.appspot.com",
  messagingSenderId: "428413673435",
  appId: "1:428413673435:web:3f86d44eca170a4861d1fe",
  measurementId: "G-758T5XTYHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// declaring this auth globally as it will be used everywhere when any api from firebase is used
export const auth = getAuth();