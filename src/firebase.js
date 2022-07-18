import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDJvlM1wxZBYa79z9dJWAogYjgwmwDmfM",
  authDomain: "netflix-clone-9cce5.firebaseapp.com",
  projectId: "netflix-clone-9cce5",
  storageBucket: "netflix-clone-9cce5.appspot.com",
  messagingSenderId: "287773236557",
  appId: "1:287773236557:web:3cc2481b74e198fdb4ab04",
  measurementId: "G-QN5LJ1E3BT",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
