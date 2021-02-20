import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5burUKI77oq5Y7-CCawG5UlfD5QmbB3w",
    authDomain: "trationapp.firebaseapp.com",
    databaseURL: "https://trationapp-default-rtdb.firebaseio.com",
    projectId: "trationapp",
    storageBucket: "trationapp.appspot.com",
    messagingSenderId: "1074970729838",
    appId: "1:1074970729838:web:9d8791e69e82450493b57f",
    measurementId: "G-M3D3DD4H9E"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = app.database();
const google = new firebase.auth.GoogleAuthProvider();

export { auth, db, google }