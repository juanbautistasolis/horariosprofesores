import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyATrq8-SR_wSGUWN-hNV4mxlyPPqZ1a6Qs",
  authDomain: "horaclass-ejbs.firebaseapp.com",
  databaseURL: "https://horaclass-ejbs-default-rtdb.firebaseio.com",
  projectId: "horaclass-ejbs",
  storageBucket: "horaclass-ejbs.appspot.com",
  messagingSenderId: "454773177213",
  appId: "1:454773177213:web:e691591a66b1df71256a14",
  measurementId: "G-Z0MQD3C6ZD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
