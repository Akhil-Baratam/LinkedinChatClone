import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBjM9W9-Iq3fCq4UGLUTZX9wdIFCsaLEec",
    authDomain: "linkedin-clone-b0caf.firebaseapp.com",
    projectId: "linkedin-clone-b0caf",
    storageBucket: "linkedin-clone-b0caf.appspot.com",
    messagingSenderId: "1000200296245",
    appId: "1:1000200296245:web:f800a7de7fa0cca7d31e7c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
