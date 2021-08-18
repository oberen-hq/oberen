import React, { useState, useEffect } from "react";
import FirebaseManager from "utils/firebaseManager";
import styles from "./Waitlist.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const firebaseManager = new FirebaseManager();

const Waitlist = () => {
  const [email, setEmail] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    firebaseManager.validateEmail(email).then((status: any) => {
      if (status === 0) {
        firebaseManager.setEmail(email);
        toast("Added to waitlist");
      } else {
        toast("Invalid email or already in use.", { autoClose: false });
      }
    });
  }

  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={"email".toUpperCase()}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Waitlist;
