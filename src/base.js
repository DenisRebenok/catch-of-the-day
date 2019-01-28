import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAw71Oawlct4WJWp9DMnpdXnXfbeL3FQ7E",
  authDomain: "catch-of-the-day-den4ik-777.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-den4ik-777.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
