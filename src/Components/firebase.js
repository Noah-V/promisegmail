// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEsbzGOKoNdaiVWQ6TWNSygRC_FZQcFAY",
  authDomain: "promisemail-faa3e.firebaseapp.com",
  projectId: "promisemail-faa3e",
  storageBucket: "promisemail-faa3e.appspot.com",
  messagingSenderId: "166104145428",
  appId: "1:166104145428:web:aee1af9927c7e3cc919101",
  measurementId: "G-6L3KFVXJGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);