// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6RfuQI-9qtwh0f2m93O-8vwZuhUniyc",
  authDomain: "ecsproject-c230c.firebaseapp.com",
  projectId: "ecsproject-c230c",
  storageBucket: "ecsproject-c230c.appspot.com",
  messagingSenderId: "494233574699",
  appId: "1:494233574699:web:7d9d7cb3f1f1311f84b96e",
  measurementId: "G-FKPTFHS95D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);