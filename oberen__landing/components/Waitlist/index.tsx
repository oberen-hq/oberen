import React, { useState } from "react";
import styles from "./Waitlist.module.css";
import FirebaseManager from "utils/firebaseManager";
import toast from "react-hot-toast";

const firebase = new FirebaseManager();

const error = (msg: any) => toast.error(msg);
const success = (email: string) => toast.success(`${email} waitlisted 🔥.`);

async function handleSubmit(email: string) {
  const result = await firebase.validateEmail(email);

  if (result === "success") {
    firebase.setEmail(email);
    success((email = email));
  } else {
    error(result);
  }
}

export default function Waitlist() {
  const [email, setEmail] = useState("");

  return (
    <React.Fragment>
      <form
        className={styles.waitlist__form}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.waitlist__form_container}>
          <label
            htmlFor="email"
            className={styles.waitlist__form_container_label}
          >
            Email Address
          </label>
          <input
            className={styles.waitlist__form_container_input}
            placeholder="eg: test@gmail.com"
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
