// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHmWJrvMjyW-zgme96dIVrnsGs59b2Kps",
//   authDomain: "bmoto-parts.firebaseapp.com",
//   projectId: "bmoto-parts",
//   storageBucket: "bmoto-parts.appspot.com",
//   messagingSenderId: "746305014871",
//   appId: "1:746305014871:web:53891bbe0f1bdab8d3a712"
// };

const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY ,
  authDomain:process.env.REACT_APP_AUTHDOMAIN ,
  projectId:process.env.REACT_APP_PROJECTID ,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
  appId:process.env.REACT_APP_APPID ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;