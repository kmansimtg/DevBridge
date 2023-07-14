import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSOy_uBe2h8eqvAzawnn8kH0lLvqzZomA",
  authDomain: "devbridge-87f48.firebaseapp.com",
  projectId: "devbridge-87f48",
  storageBucket: "devbridge-87f48.appspot.com",
  messagingSenderId: "42443781122",
  appId: "1:42443781122:web:2f8ad1f9f29704bd23a31b",
  measurementId: "G-JQ0MWXGBM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};