import { useContext } from "react";
import UserContext from "../context/user";

// Define the home page instance.

export default function Home() {
  // Grab the user by using our default context

  const { user }: any = useContext(UserContext);

  return (
    <div>
      <h3>Main</h3>
      <p>
        Hello {user.username}. Your email is {user.email}
      </p>
    </div>
  );
}
