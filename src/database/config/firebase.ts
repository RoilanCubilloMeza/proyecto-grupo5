import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeZ9s_BW639Wrim3zX2fbtcn0kR-7V5l4",
    authDomain: "proyecto-api-5b7c8.firebaseapp.com",
    databaseURL: "https://proyecto-api-5b7c8-default-rtdb.firebaseio.com",
    projectId: "proyecto-api-5b7c8",
    storageBucket: "proyecto-api-5b7c8.appspot.com",
    messagingSenderId: "932283162568",
    appId: "1:932283162568:web:0e86f4602c0706733a2afd",
    measurementId: "G-20HCCMK81Q",
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export default db;