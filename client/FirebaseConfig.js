// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2POvKVXDmpuEPFyKJEa0gMRMXKA8p1Bg",
  authDomain: "impromptu-adb4b.firebaseapp.com",
  projectId: "impromptu-adb4b",
  storageBucket: "impromptu-adb4b.appspot.com",
  messagingSenderId: "1095939086723",
  appId: "1:1095939086723:web:6f0a1b88bede089dba3eb6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
