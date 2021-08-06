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
              res("Duplicate waitlist has been identified");
            }
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          throw error;
        });

      if (validator.isEmail(email)) {
        res("Added to waitlist.");
      } else {
        res("Invalid Email Address.");
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
      .then(() => {
        console.log("Document successfully written.");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
}
