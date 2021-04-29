import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBTmJoRuBxbP5svVc4y9soGxiOh548-_M",
    authDomain: "instagram-clone-29d84.firebaseapp.com",
    projectId: "instagram-clone-29d84",
    storageBucket: "instagram-clone-29d84.appspot.com",
    messagingSenderId: "328570283468",
    appId: "1:328570283468:web:928d51a294f4d7959ce969"
  });

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};