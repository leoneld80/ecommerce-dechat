// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiBTBfUjAuF7L0zLbv_gAtJLDhuGjol9g",
  authDomain: "ecommerce-funkos.firebaseapp.com",
  projectId: "ecommerce-funkos",
  storageBucket: "ecommerce-funkos.appspot.com",
  messagingSenderId: "104832174722",
  appId: "1:104832174722:web:8474caf5598b178b4b429b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)