// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJTlDx9HdylCNmAnWaXSioxt9qrAgd02M",
  authDomain: "independence-provider-assi-10.firebaseapp.com",
  projectId: "independence-provider-assi-10",
  storageBucket: "independence-provider-assi-10.appspot.com",
  messagingSenderId: "255679984344",
  appId: "1:255679984344:web:958c718ecec59b5879ddad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
