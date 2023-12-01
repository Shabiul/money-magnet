import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "fireabse/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCO-SRuc8eOhR1dVW2U4FE3Xv62q6o4x3c",
  authDomain: "money-magnet-4f37d.firebaseapp.com",
  projectId: "money-magnet-4f37d",
  storageBucket: "money-magnet-4f37d.appspot.com",
  messagingSenderId: "737910454073",
  appId: "1:737910454073:web:d6beff3eaae73decf09ae8",
  measurementId: "G-HPQF99X699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;