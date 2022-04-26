// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbyjWmWvozHJSzk_hl8gzYOPOG_VHwQbo",
  authDomain: "consulting-business-31c70.firebaseapp.com",
  projectId: "consulting-business-31c70",
  storageBucket: "consulting-business-31c70.appspot.com",
  messagingSenderId: "739432332244",
  appId: "1:739432332244:web:0fa905b0c71bfeb7d83441",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
