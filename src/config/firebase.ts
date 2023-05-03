import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import 'firebase/firestore';
import 'firebase/storage';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCeZ9s_BW639Wrim3zX2fbtcn0kR-7V5l4",
    authDomain: "proyecto-api-5b7c8.firebaseapp.com",
    projectId: "proyecto-api-5b7c8",
    storageBucket: "proyecto-api-5b7c8.appspot.com",
    messagingSenderId: "932283162568",
    appId: "1:932283162568:web:0e86f4602c0706733a2afd",
    measurementId: "G-20HCCMK81Q"
  };
  const app= initializeApp(firebaseConfig);
 firebase.getApps.length
  export const auth = getAuth();