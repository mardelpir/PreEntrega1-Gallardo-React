// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-s4I7zuOLKpLKKqP1Lm1kiqf0Zzsk3Jo",
  authDomain: "proyecto-react-da8b6.firebaseapp.com",
  projectId: "proyecto-react-da8b6",
  storageBucket: "proyecto-react-da8b6.appspot.com",
  messagingSenderId: "1009327380316",
  appId: "1:1009327380316:web:2fe1e591e12e35fe235399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// crear una instancia de la base de datos
export const db = getFirestore(app);
