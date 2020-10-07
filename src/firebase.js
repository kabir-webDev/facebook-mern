import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUuxzTI_pqwgEBfcyWw0Cx8rxSe6dgcF8",
  authDomain: "facebook-mern-333.firebaseapp.com",
  databaseURL: "https://facebook-mern-333.firebaseio.com",
  projectId: "facebook-mern-333",
  storageBucket: "facebook-mern-333.appspot.com",
  messagingSenderId: "835774374889",
  appId: "1:835774374889:web:75f84396636b730bfc6178",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
