import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbyYFxLFNk5tNBXIMvk7QFmnUTaPXIWS4",
  authDomain: "study-b9fbc.firebaseapp.com",
  projectId: "study-b9fbc",
  storageBucket: "study-b9fbc.appspot.com",
  messagingSenderId: "812983669212",
  appId: "1:812983669212:web:2f6ebaa41691e32de07f19"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }