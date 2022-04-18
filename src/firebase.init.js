// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhfVmow7TMuzQLvHKVI7tihl6AbfhxATk",
  authDomain: "minecrafter-fumiz.firebaseapp.com",
  projectId: "minecrafter-fumiz",
  storageBucket: "minecrafter-fumiz.appspot.com",
  messagingSenderId: "511412924449",
  appId: "1:511412924449:web:791fb7d552d272f7753360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
