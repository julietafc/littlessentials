import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl5GqF8RNOPYzwzfm_QI3z1fVhHk5fcxE",
  authDomain: "littlessentials-dev.firebaseapp.com",
  projectId: "littlessentials-dev",
  storageBucket: "littlessentials-dev.appspot.com",
  messagingSenderId: "839683234168",
  appId: "1:839683234168:web:bdeec696637f4a30b1108d",
  measurementId: "G-Z39KDM5EC6",
};

const app = initializeApp(
  //{
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // // databaseURL: "process.env.REACT_APP_FIREBASE_DATABASE_URL",
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  //}
  firebaseConfig
);

export const auth = getAuth(app);
export default app;
