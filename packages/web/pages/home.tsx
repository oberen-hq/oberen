import type { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Meta } from "../components";
import { MeDocument } from "../generated/graphql";
import { initializeApollo } from "../utils/apolloClient";

interface Props {
  children?: React.ReactNode;
  data: any;
}

const Home: NextPage = async () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <Meta
        title="Home"
        description="Main home page"
        keywords="oberen, home page, profile, jobs, employers, employees"
        url="http://localhost:3000"
      />
      {isLoading ? <h1>Loading...</h1> : <h1>Hey</h1>}
    </React.Fragment>
  );
};

export default Home;
