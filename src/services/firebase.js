// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-yy1qxm6KF0AUxsmxmaKgZMrdiYs6-gM",
  authDomain: "dummybe-3b8ab.firebaseapp.com",
  databaseURL: "https://dummybe-3b8ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dummybe-3b8ab",
  storageBucket: "dummybe-3b8ab.appspot.com",
  messagingSenderId: "275909209373",
  appId: "1:275909209373:web:bfce717b34aba366f0c5f4",
  measurementId: "G-J918QPCFFZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);