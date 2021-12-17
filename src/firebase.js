import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoe7W-RoYOZKEj-0IJ1C7QFN7-9bCA8fY",
  authDomain: "jiit-mate-c9998.firebaseapp.com",
  databaseURL: "https://jiit-mate-c9998-default-rtdb.firebaseio.com",
  projectId: "jiit-mate-c9998",
  storageBucket: "jiit-mate-c9998.appspot.com",
  messagingSenderId: "1044532676171",
  appId: "1:1044532676171:web:7c816074905f789f6c2fce",
  measurementId: "G-5QDKMJP87K"

  
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBL3XWCUixWk8f_vUqA-knGwjJOTH8PrBg",
//   authDomain: "jiit-mate-288ea.firebaseapp.com",
//   databaseURL: "https://jiit-mate-288ea-default-rtdb.firebaseio.com",
//   projectId: "jiit-mate-288ea",
//   storageBucket: "jiit-mate-288ea.appspot.com",
//   messagingSenderId: "137058529611",
//   appId: "1:137058529611:web:ef99fc9b19467fb98578ce"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBL3XWCUixWk8f_vUqA-knGwjJOTH8PrBg",
//   authDomain: "jiit-mate-288ea.firebaseapp.com",
//   databaseURL: "https://jiit-mate-288ea-default-rtdb.firebaseio.com",
//   projectId: "jiit-mate-288ea",
//   storageBucket: "jiit-mate-288ea.appspot.com",
//   messagingSenderId: "137058529611",
//   appId: "1:137058529611:web:ef99fc9b19467fb98578ce"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
