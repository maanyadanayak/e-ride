import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC4N2bReI0xEXBnjcHqJUImAhLS7_rY2Tk",
    authDomain: "e-ride-63abe.firebaseapp.com",
    projectId: "e-ride-63abe",
    storageBucket: "e-ride-63abe.appspot.com",
    messagingSenderId: "15138099168",
    appId: "1:15138099168:web:ac3500c6165d1dfd9f2585"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
