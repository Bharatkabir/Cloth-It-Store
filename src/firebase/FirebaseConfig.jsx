// firebase.js (or FirebaseConfig.js)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkKz_ezrgOMguHwXx5sEQWbA6GOAL2xfU",
  authDomain: "clothit-store.firebaseapp.com",
  projectId: "clothit-store",
  storageBucket: "clothit-store.appspot.com",
  messagingSenderId: "754185012414",
  appId: "1:754185012414:web:b0c5f09be05aaaa19dcaef",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
