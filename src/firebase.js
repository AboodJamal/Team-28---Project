// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmtw_4EISf9wpKnbAu0KPCL1afkOXOfYE",
  authDomain: "team-28-574ca.firebaseapp.com",
  projectId: "team-28-574ca",
  storageBucket: "team-28-574ca.appspot.com",
  messagingSenderId: "446326719424",
  appId: "1:446326719424:web:4f9c8ec48cbfd993c3be25",
  measurementId: "G-M8C7F0RQ4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);