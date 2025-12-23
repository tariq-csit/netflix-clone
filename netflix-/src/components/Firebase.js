
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUXXOQ5kHcUVykIKC3uzwZAmWjgXExNhw",
    authDomain: "netflix-clone-cc3a5.firebaseapp.com",
    projectId: "netflix-clone-cc3a5",
    storageBucket: "netflix-clone-cc3a5.appspot.com",
    messagingSenderId: "1023395454954",
    appId: "1:1023395454954:web:a7846f2c2d1ee6a19c1c93",
    measurementId: "G-C2F2ZE61GH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;