// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ALzc1SDtv-j5sWMr2i2qmSR8wiNWHto",
  authDomain: "izibay-a6e07.firebaseapp.com",
  projectId: "izibay-a6e07",
  storageBucket: "izibay-a6e07.firebasestorage.app",
  messagingSenderId: "934442007728",
  appId: "1:934442007728:web:4b80b204dfbdfc547e4f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);