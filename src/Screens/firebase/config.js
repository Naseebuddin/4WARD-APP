import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyAiwpvHSde2CCygne9neVEeteaVImsjnZ0",
    authDomain: "ward-505cc.firebaseapp.com",
    projectId: "ward-505cc",
    storageBucket: "ward-505cc.appspot.com",
    messagingSenderId: "850991455222",
    appId: "1:850991455222:web:350c65f4d79aeb7074c5d7",
    measurementId: "G-1163JSW8ZP"
  };

  if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig)
  }
  export{firebase}