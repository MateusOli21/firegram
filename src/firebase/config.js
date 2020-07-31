import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDVOY2ethrk-U9mjtdKPvOL1j1B9yY9OpM",
  authDomain: "firegram-3e2c3.firebaseapp.com",
  databaseURL: "https://firegram-3e2c3.firebaseio.com",
  projectId: "firegram-3e2c3",
  storageBucket: "firegram-3e2c3.appspot.com",
  messagingSenderId: "619892901287",
  appId: "1:619892901287:web:fafb6fc7e7212c17bce282",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
