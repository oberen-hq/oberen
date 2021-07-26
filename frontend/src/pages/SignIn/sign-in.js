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

  function fetchOrganization() {
    axios
      .get("http://localhost:3001/api/organization/60feba8ba99aec5d448847a6")
      .then((res) => {
        setOrganization(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchOrganization();
  }, []);

  return (
    <React.Fragment>
      {organization ? (
        <h1>{organization.name}</h1>
      ) : (
        <h1>There isn't a organization</h1>
      )}
    </React.Fragment>
  );
};

export default SignIn;
