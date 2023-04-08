import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_-1AySgRjff8k9kjO96He0mMtE92601M",
  authDomain: "berusaha-cool.firebaseapp.com",
  projectId: "berusaha-cool",
  storageBucket: "berusaha-cool.appspot.com",
  messagingSenderId: "911365130506",
  appId: "1:911365130506:web:1b4004f0f837d39d7092f3",
  measurementId: "G-P8YT3EVMV2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
