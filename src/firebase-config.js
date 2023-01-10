// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYwnYIHEl_xpn7VmFRaEgZgwFciVMNFHw",
  authDomain: "chatroom-6a6a4.firebaseapp.com",
  projectId: "chatroom-6a6a4",
  storageBucket: "chatroom-6a6a4.appspot.com",
  messagingSenderId: "340250818738",
  appId: "1:340250818738:web:149551ead55888b02131ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();