// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Fix: Import getFirestore to use Cloud Firestore
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFV-riY59wzsVnrE5eCVvuPHrIFwxthsg",
  authDomain: "wavemicron-app.firebaseapp.com",
  projectId: "wavemicron-app",
  storageBucket: "wavemicron-app.firebasestorage.app",
  messagingSenderId: "1025651564657",
  appId: "1:1025651564657:web:0e00a33a2fb893b948bbd0",
  measurementId: "G-119RKQ5V8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Fix: Initialize Firestore and export it. The getAnalytics import was causing an error and was not used.
export const db = getFirestore(app);
