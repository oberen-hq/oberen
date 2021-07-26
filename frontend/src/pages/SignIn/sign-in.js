import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import jwt_decode from "jwt-decode";
import axios from "axios";

const SignIn = () => {
  let { user, error } = useContext(AuthContext);
  const [organization, setOrganization] = useState(null);

  user = jwt_decode(user);

  if (error) {
    console.log(error);
  }

  return (
    <React.Fragment>
      {post ? <h1>There is a post</h1> : <h1>There isn't a post</h1>}
    </React.Fragment>
  );
};

export default SignIn;
