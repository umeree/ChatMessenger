import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAUJwzrK6YiZBDI3dDzvnByI8-uMvmZvS8",
    authDomain: "unichat-8cbcf.firebaseapp.com",
    projectId: "unichat-8cbcf",
    storageBucket: "unichat-8cbcf.appspot.com",
    messagingSenderId: "740993223390",
    appId: "1:740993223390:web:6c6c1a831fe8e44afb104f",
  })
  .auth();
