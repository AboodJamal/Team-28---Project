
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBBM9rXXWrNlKML_bGmC_HuN6dV08KFp4k",
  authDomain: "test-41870.firebaseapp.com",
  projectId: "test-41870",
  storageBucket: "test-41870.appspot.com",
  messagingSenderId: "136802085455",
  appId: "1:136802085455:web:e13e6818b8bdb51bb3583a",
  measurementId: "G-GC794DDVED"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);