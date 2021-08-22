import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import validator from "validator";

export default class FirebaseManager {
  initialize() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }

  validateEmail(email: string) {
    return new Promise(async (res, _) => {
      this.initialize();

      let collection = firebase.firestore().collection("waitlist");

      await collection
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((document) => {
            if (document) {
              res(2);
            }
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          throw error;
        });

      if (validator.isEmail(email)) {
        res(0);
      } else {
        res(1);
      }
    });
  }

  setEmail(email: string) {
    this.initialize();
    firebase
      .firestore()
      .collection("waitlist")
      .doc(email)
      .set({
        email: email,
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
}
