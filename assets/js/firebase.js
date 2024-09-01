
//   // Import the functions you need from the SDKs you need
//   {import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";}
//   { import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";}
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// const { default: firebase } = require("firebase/compat/app");
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCIyZ5aD4dn7jLndHwFz68y3QaDnZy_OR4",
    authDomain: "portfolio-vk-44c15.firebaseapp.com",
    projectId: "portfolio-vk-44c15",
    storageBucket: "portfolio-vk-44c15.appspot.com",
    messagingSenderId: "251483415272",
    appId: "1:251483415272:web:d36470c5e35676e4af1f5d",
    measurementId: "G-LH1BBFW4K9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const db = firebase.firestore();
    const db = app.firestore();