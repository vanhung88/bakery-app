import firebase from "firebase";
import "firebase/firestore";
// ket noi firebase
var firebaseConfig = {
  apiKey: "AIzaSyCVALwCKlORijrRSEs9GZt_jR3gWDzela8",
  authDomain: "bakery-1a9aa.firebaseapp.com",
  databaseURL: "https://bakery-1a9aa-default-rtdb.firebaseio.com",
  projectId: "bakery-1a9aa",
  storageBucket: "bakery-1a9aa.appspot.com",
  messagingSenderId: "529532030358",
  appId: "1:529532030358:web:ee816b63d3835534c221b7",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
