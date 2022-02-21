import  firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDR189Qf0wV7arviz9h5zP41s4QFanRbeE",
  authDomain: "uchef-806a0.firebaseapp.com",
  projectId: "uchef-806a0",
  storageBucket: "uchef-806a0.appspot.com",
  messagingSenderId: "83365129347",
  appId: "1:83365129347:web:af23ea1dc51ec6001fbfb6"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app

}
export const getFirestore = () => {
    return firebase.firestore(app)

}