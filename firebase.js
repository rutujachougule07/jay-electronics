// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQPHFdhr8zegd0TvarSGxZc8CSURXWtKw",
  authDomain: "jay-electronics-b199d.firebaseapp.com",
  projectId: "jay-electronics-b199d",
  storageBucket: "jay-electronics-b199d.firebasestorage.app",
  messagingSenderId: "61297092105",
  appId: "1:61297092105:web:b945559db5a193dee6fad8",
  measurementId: "G-RRCY396W65"
};

// Initialize Firebase Core
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (Browser context only)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore Database
export const db = getFirestore(app);

export default app;
