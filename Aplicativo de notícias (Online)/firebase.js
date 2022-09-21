import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3xImqp5TN5HROczvYgQuvNB8q1QXBq9o",
    authDomain: "portalnoticias-bb464.firebaseapp.com",
    databaseURL: "https://portalnoticias-bb464.firebaseio.com",
    projectId: "portalnoticias-bb464",
    storageBucket: "portalnoticias-bb464.appspot.com",
    messagingSenderId: "482238365131",
    appId: "1:482238365131:web:0c16909a80ea0e1d9b0a4e"
  });

  const db = firebase.firestore();

  export {db};