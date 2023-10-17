// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-wIBYcqVtcTWTbgYAb8ZkM_59kFIFZ0A",
    authDomain: "coffee-store-9193e.firebaseapp.com",
    projectId: "coffee-store-9193e",
    storageBucket: "coffee-store-9193e.appspot.com",
    messagingSenderId: "24986992220",
    appId: "1:24986992220:web:42854a2ef2c13e0b94f099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;