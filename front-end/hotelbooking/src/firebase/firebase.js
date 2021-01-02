import firebase from "firebase/app";
import "firebase/storage";
import 'firebase/firestore';

var firebaseConfig = {
  // apiKey: "AIzaSyBoaS174aq-z6SMJnuqvhq3hWUY0XlsiYw",
  // authDomain: "hotel-booking-25a45.firebaseapp.com",
  // projectId: "hotel-booking-25a45",
  // storageBucket: "hotel-booking-25a45.appspot.com",
  // messagingSenderId: "254913106783",
  // appId: "1:254913106783:web:ceb64f2e77cf15104e1cea"

  apiKey: "AIzaSyBhQitEXOwNLMOgyIphrJ84nVnGzew0l5g",
  authDomain: "hotelreservation-e3f02.firebaseapp.com",
  projectId: "hotelreservation-e3f02",
  storageBucket: "hotelreservation-e3f02.appspot.com",
  messagingSenderId: "499428334409",
  appId: "1:499428334409:web:4096c21538344481e15898"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { storage,projectStorage, projectFirestore, timestamp, firebase as default };
