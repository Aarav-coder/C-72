import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDMNOH7P-4MeuuQHEpzYCVRpRz_Merjtgw",
    authDomain: "wily-11546.firebaseapp.com",
    projectId: "wily-11546",
    storageBucket: "wily-11546.appspot.com",
    messagingSenderId: "142716509365",
    appId: "1:142716509365:web:daf66946b39ded333772fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();