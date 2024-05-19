// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkKz_ezrgOMguHwXx5sEQWbA6GOAL2xfU",
  authDomain: "clothit-store.firebaseapp.com",
  projectId: "clothit-store",
  storageBucket: "clothit-store.appspot.com",
  messagingSenderId: "754185012414",
  appId: "1:754185012414:web:b0c5f09be05aaaa19dcaef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
