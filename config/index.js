// Import the functions you need from the SDKs you need
import app  from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCJizqV2dE_0hjSIK-06c2M5jcrxcPZdhg",
  authDomain: "whatsapp-29ca3.firebaseapp.com",
  databaseURL: "https://whatsapp-29ca3-default-rtdb.firebaseio.com",
  projectId: "whatsapp-29ca3",
  storageBucket: "whatsapp-29ca3.appspot.com",
  messagingSenderId: "1008594615594",
  appId: "1:1008594615594:web:29c0f8bb2f5d58c7d2f253"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;