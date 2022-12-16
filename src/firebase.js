import {initializeApp} from "firebase/app";
import firebase from "../node_modules/firebase/compat"; 
import 'firebase/compat/firestore';

import {
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword
        
} from "firebase/auth";

import {getFirestore,
        collection,
        addDoc} from "firebase/firestore";

import { getDatabase } from "firebase/database";


const firebaseConfig = firebase.initializeApp(
  {
    apiKey: "AIzaSyATrq8-SR_wSGUWN-hNV4mxlyPPqZ1a6Qs",
    authDomain: "horaclass-ejbs.firebaseapp.com",
    databaseURL: "https://horaclass-ejbs-default-rtdb.firebaseio.com",
    projectId: "horaclass-ejbs",
    storageBucket: "horaclass-ejbs.appspot.com",
    messagingSenderId: "454773177213",
    appId: "1:454773177213:web:e691591a66b1df71256a14",
    measurementId: "G-Z0MQD3C6ZD"
  }
)

const auth= firebaseConfig.auth();
const db= firebaseConfig.firestore();
const storage= firebaseConfig.storage();



const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      return false;
    }
  };

  const registerWithEmailAndPassword = async ( name, email, password) => {
    console.log("me registre")
    try {
      const res = await createUserWithEmailAndPassword("Manuel", email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err.message);
      alert("Registrado exitosamente");
    }
  };

export {
    auth,
    db,
    logInWithEmailAndPassword,
    //signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    //sendPasswordReset,
    //logout,  
    //StartFirebase,
    storage
    
  };