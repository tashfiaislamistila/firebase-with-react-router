// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsZ5wRYNnrFvbaSzxg7Qp8yzqJK8Iawqk",
    authDomain: "fir-with-react-router-3bd15.firebaseapp.com",
    projectId: "fir-with-react-router-3bd15",
    storageBucket: "fir-with-react-router-3bd15.appspot.com",
    messagingSenderId: "324132543944",
    appId: "1:324132543944:web:b0220c902a2402dd2df4fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;