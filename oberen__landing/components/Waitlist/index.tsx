import React, { useState } from "react";
import styles from "./Waitlist.module.css";
import FirebaseManager from "utils/firebaseManager";
import toast from "react-hot-toast";
import emailjs, { init } from "emailjs-com";

const firebase = new FirebaseManager();

const error = (msg: any) => toast.error(msg);
const success = (email: string) => toast.success(`${email} waitlisted 🔥.`);

init("user_bHXqZaAY9AYBC9P0KrB4y");

function sendEmail(e: any) {
  e.preventDefault();
  return;
  // emailjs
  //   .sendForm("service_l85s7ab", "template_3s09cax", e.target)
  //   .then(function (response) {
  //     console.log(`SUCCESS: ${response.status} - ${response.text}`);
  //   })
  //   .catch(function (err) {
  //     console.error(err);
  //   });
}

async function handleSubmit(email: string) {
  if (email.length === 0) {
    return;
  }

  const result = await firebase.validateEmail(email);

  if (result === "success") {
    firebase.setEmail(email);
    success((email = email));
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } else {
    error(result);
  }
}

export default function Waitlist() {
  const [email, setEmail] = useState("");

  return (
    <React.Fragment>
      <form className={styles.waitlist__form} onSubmit={sendEmail}>
        <div className={styles.waitlist__form_container}>
          <label
            htmlFor="email"
            className={styles.waitlist__form_container_label}
          >
            Email Address
          </label>
          <input
            className={styles.waitlist__form_container_input}
            placeholder="example@email.com"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={styles.waitlist__form_submit}
            onClick={() => handleSubmit(email)}
          >
            Join Waitlist
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
