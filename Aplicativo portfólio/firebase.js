import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDWqvJizUCjabBWbQeuCYsyHjsf8NWj7mg",
        authDomain: "portfolioapp-30c0e.firebaseapp.com",
        databaseURL: "https://portfolioapp-30c0e.firebaseio.com",
        projectId: "portfolioapp-30c0e",
        storageBucket: "portfolioapp-30c0e.appspot.com",
        messagingSenderId: "495728466656",
        appId: "1:495728466656:web:c8c0886f07403c10964e85"
    });
  
  
  const db = firebase.firestore();

  
  export {db};