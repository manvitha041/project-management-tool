import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCujqwD2xFZHQ5-dc8MXbsWJbbOhFfKHVA",
  authDomain: "marioplan-b30d3.firebaseapp.com",
  databaseURL: "https://marioplan-b30d3.firebaseio.com",
  projectId: "marioplan-b30d3",
  storageBucket: "marioplan-b30d3.appspot.com",
  messagingSenderId: "670212499955",
  appId: "1:670212499955:web:529bc8694af41007d64a86",
  measurementId: "G-LRVHVEPGN4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
