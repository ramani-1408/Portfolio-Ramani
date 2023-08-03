
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAlQLiksSTgWRH6fP6h1aS5yJ77rew9UBo",
  authDomain: "protfolio-74bdb.firebaseapp.com",
  projectId: "protfolio-74bdb",
  storageBucket: "protfolio-74bdb.appspot.com",
  messagingSenderId: "447253026319",
  appId: "1:447253026319:web:782ecf28a4a5b47993f57a",
  measurementId: "G-7RDXKF6XVB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);