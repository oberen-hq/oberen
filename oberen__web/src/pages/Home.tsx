import { useContext } from "react";
import UserContext from "../context/user";

export default function Home() {
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
