// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRzf7gxMpHSHifApUj0h4uRsRQBbat8zs",
  authDomain: "gallery-1af8b.firebaseapp.com",
  projectId: "gallery-1af8b",
  storageBucket: "gallery-1af8b.appspot.com",
  messagingSenderId: "747142916621",
  appId: "1:747142916621:web:80a985488e460132d24344",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
