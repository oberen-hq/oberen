import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { REGISTER_MUTATION } from "../graphql/mutations";

export default function Register() {
  const history = useHistory();
  const [createUser] = useMutation(REGISTER_MUTATION);
  const [vars, setVars] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    createUser({
      variables: {
        input: {
          username: vars.username,
          email: vars.email,
          password: vars.password,
        },
      },
    })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.createUser);
        history.push("/home");
      })
      .catch((err) => {
        // console.log(JSON.stringify(err, null, 2));
        throw err;
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" />
        <input
          type="text"
          name="username"
          onChange={(event: any) => {
            setVars({
              ...vars,
              username: event.target.value,
            });
          }}
        />

        <label htmlFor="email" />
        <input
          type="text"
          name="email"
          onChange={(event: any) => {
            setVars({
              ...vars,
              email: event.target.value,
            });
          }}
        />

        <label htmlFor="password" />
        <input
          type="password"
          name="password"
          onChange={(event: any) => {
            setVars({
              ...vars,
              password: event.target.value,
            });
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
