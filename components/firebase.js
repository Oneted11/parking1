
import firebase from 'firebase'
require ('firebase/firestore')
  // Initialize Firebase
  export var config = {
    apiKey: "AIzaSyAXPp2-HW8zINfexZRSLKFzazkRne06ikc",
    authDomain: "parking-67589.firebaseapp.com",
    databaseURL: "https://parking-67589.firebaseio.com",
    projectId: "parking-67589",
    storageBucket: "parking-67589.appspot.com",
    messagingSenderId: "679133577207"
  };
  firebase.initializeApp(config);
  const auth=firebase.auth();
  const db=firebase.firestore();
  export {auth,db};
