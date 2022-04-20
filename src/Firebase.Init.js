// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK3tkC7hTjigXcaQZ3xmfc_yDNz3yjDlw",
  authDomain: "raj-athletic.firebaseapp.com",
  projectId: "raj-athletic",
  storageBucket: "raj-athletic.appspot.com",
  messagingSenderId: "600030595860",
  appId: "1:600030595860:web:7960b6bc6a41b960c95001",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
