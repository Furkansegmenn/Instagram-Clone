
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXKB9VgLOXvOoePn6DJWDJcI5LIKjgqoM",
  authDomain: "insta-clone-7512c.firebaseapp.com",
  projectId: "insta-clone-7512c",
  storageBucket: "insta-clone-7512c.appspot.com",
  messagingSenderId: "773943268780",
  appId: "1:773943268780:web:092c4d89d38e7a4ca7d609",
  measurementId: "G-M79XD78VQB"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,auth,firestore,storage};