import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMcYE3qQgBEqJrGUutHlJzLe931dtrHmY",
    authDomain: "project-a484c.firebaseapp.com",
    projectId: "project-a484c",
    storageBucket: "project-a484c.appspot.com",
    messagingSenderId: "869992975615",
    appId: "1:869992975615:web:b4e3feb1d74fb203ced0ca"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
