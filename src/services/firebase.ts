import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-mutU34buCXWbuNsMtwX52r988LfejAw",
  authDomain: "letmeask-32ccb.firebaseapp.com",
  databaseURL: "https://letmeask-32ccb-default-rtdb.firebaseio.com",
  projectId: "letmeask-32ccb",
  storageBucket: "letmeask-32ccb.appspot.com",
  messagingSenderId: "1047687226474",
  appId: "1:1047687226474:web:1f7ac25827768bb1e91613"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.database();

export { auth, database , firebase};