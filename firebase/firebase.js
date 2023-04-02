 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyCJOgKb9kXn0OZmgfkx6saTYh8tK2E_Y4c",
  authDomain: "hackothon-aec4e.firebaseapp.com",
  projectId: "hackothon-aec4e",
  storageBucket: "hackothon-aec4e.appspot.com",
  messagingSenderId: "1065148604410",
  appId: "1:1065148604410:web:f525ba0a351ce8d9ce0e43"
};

 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const database = getDatabase(app);