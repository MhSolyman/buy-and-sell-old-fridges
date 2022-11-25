// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmWct5VUFTlcQVoyztDqAJlNjSgfo2DLw",
  authDomain: "buy-and-sell-old-fridges.firebaseapp.com",
  projectId: "buy-and-sell-old-fridges",
  storageBucket: "buy-and-sell-old-fridges.appspot.com",
  messagingSenderId: "797854070824",
  appId: "1:797854070824:web:345024472f8a23b7399d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;