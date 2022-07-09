import 'firebase/firestore';

import * as firebase from 'firebase/app';

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

export const app = firebase.initializeApp(firebaseConfig);
// export const db = app.firestore();