import firebase from "firebase//app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCLoaP5WZxuPQCeQd7UbjeNHlGLvBSilaQ",
  authDomain: "todoist-7eff1.firebaseapp.com",
  databaseURL: "https://todoist-7eff1.firebaseio.com",
  projectId: "todoist-7eff1",
  storageBucket: "todoist-7eff1.appspot.com",
  messagingSenderId: "662311268311",
  appId: "1:662311268311:web:6cf485e9b940653836e592",
  measurementId: "G-JFRSP6LSEV"
});

export { firebaseConfig as firebase };
