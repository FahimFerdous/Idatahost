import firebase from "firebase/app";

import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyB_20SrS3l0V5bR_lv8FHls3ZBdnXrJvK8",
  authDomain: "idatahost-60e08.firebaseapp.com",
  projectId: "idatahost-60e08",
  storageBucket: "idatahost-60e08.appspot.com",
  messagingSenderId: "1048320970992",
  appId: "1:1048320970992:web:3a3bf60d5e0f599a833235",
  measurementId: "G-4J69NSDDSV",
};
// Initialize Firebase

function initFireBase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

initFireBase();
export { firebase };
