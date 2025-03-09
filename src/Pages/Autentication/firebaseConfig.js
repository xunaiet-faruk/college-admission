// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi3j3NrZQGpB5G9tv-nOyNO0wic2MNcUA",
    authDomain: "college-booking-web.firebaseapp.com",
    projectId: "college-booking-web",
    storageBucket: "college-booking-web.appspot.com",
    messagingSenderId: "516843913256",
    appId: "1:516843913256:web:635c209ec8310380e8351d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;