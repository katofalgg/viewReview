import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import 'firebase/storage'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8FFwA8pKj7-sAxiIX5Fgk4papnd_yxrk",
    authDomain: "viewreview-90190.firebaseapp.com",
    databaseURL: "https://viewreview-90190-default-rtdb.firebaseio.com",
    projectId: "viewreview-90190",
    storageBucket: "viewreview-90190.appspot.com",
    messagingSenderId: "216764053700",
    appId: "1:216764053700:web:176a44b21c5bcb99417191",
    measurementId: "G-6MPMVZB9WJ"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;

