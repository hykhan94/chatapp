// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnHR63hvliJaRg8O5XO4kcszI8sfB3fHk",
    authDomain: "chatapp-d790e.firebaseapp.com",
    projectId: "chatapp-d790e",
    storageBucket: "chatapp-d790e.appspot.com",
    messagingSenderId: "124821217825",
    appId: "1:124821217825:web:e52ab69962244832b7f960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);