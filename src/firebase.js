import firebase from 'firebase';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyC-CXGqaHnl-tm4kHFqXCxU3ONnDobEyPo",

  authDomain: "distribution-app-81d20.firebaseapp.com",

  projectId: "distribution-app-81d20",

  storageBucket: "distribution-app-81d20.appspot.com",

  messagingSenderId: "317712061219",

  appId: "1:317712061219:web:ba4b39401892f0578af296",

  measurementId: "G-QSD524X9KF"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Use this to initialize the firebase App
// Initialize Firebase

export default firebase;