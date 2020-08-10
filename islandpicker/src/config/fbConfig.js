import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDijdfu8dkjEDLccLM8-7XTNywQVaoMEU",
  authDomain: "islandpicker-b01fa.firebaseapp.com",
  databaseURL: "https://islandpicker-b01fa.firebaseio.com",
  projectId: "islandpicker-b01fa",
  storageBucket: "islandpicker-b01fa.appspot.com",
  messagingSenderId: "120471356919",
  appId: "1:120471356919:web:c4d290d304306b97691af2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
