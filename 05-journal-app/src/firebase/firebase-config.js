import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC57LCECmVtSu75WJ0LOM9H2eqYamcI_DE",
  authDomain: "react-app-cursos-22696.firebaseapp.com",
  projectId: "react-app-cursos-22696",
  storageBucket: "react-app-cursos-22696.appspot.com",
  messagingSenderId: "300357377312",
  appId: "1:300357377312:web:cf1a4916f760f3f4a58b45",
  measurementId: "G-97Y4V9EB6E",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
