import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_4gkpljOZPbnubmb6xfHgjpUyPVcp0GY",
    authDomain: "react-app-curso-eea14.firebaseapp.com",
    databaseURL: "https://react-app-curso-eea14.firebaseio.com",
    projectId: "react-app-curso-eea14",
    storageBucket: "react-app-curso-eea14.appspot.com",
    messagingSenderId: "577514890113",
    appId: "1:577514890113:web:f802a82e8368e2284b7e80"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}