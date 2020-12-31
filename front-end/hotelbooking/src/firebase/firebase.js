import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBoaS174aq-z6SMJnuqvhq3hWUY0XlsiYw",
  authDomain: "hotel-booking-25a45.firebaseapp.com",
  projectId: "hotel-booking-25a45",
  storageBucket: "hotel-booking-25a45.appspot.com",
  messagingSenderId: "254913106783",
  appId: "1:254913106783:web:ceb64f2e77cf15104e1cea"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database().ref('/posts');

export { storage, database, firebase as default };
