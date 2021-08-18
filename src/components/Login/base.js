
import 'firebase/auth'
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD8FFwA8pKj7-sAxiIX5Fgk4papnd_yxrk",
    authDomain: "viewreview-90190.firebaseapp.com",
    projectId: "viewreview-90190",
    storageBucket: "viewreview-90190.appspot.com",
    messagingSenderId: "216764053700",
    appId: "1:216764053700:web:176a44b21c5bcb99417191",
    measurementId: "G-6MPMVZB9WJ"
};
  
const app = firebase.initializeApp(firebaseConfig);
export default app;
firebase.analytics();
