import "firebase/firestore";

import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PRJ_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


const app =  firebase.initializeApp(firebaseConfig);
const DB = app.firestore()
export default DB