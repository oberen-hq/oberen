import type { NextPage, GetServerSideProps } from "next";
import React from "react";
import { Meta } from "../components";
import { MeDocument } from "../generated/graphql";
import { initializeApollo } from "../utils/apolloClient";

interface Props {
  children?: React.ReactNode;
  user?: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = initializeApollo();

  const { data, loading, error } = await client.query({
    query: MeDocument,
  });

  const user = data?.me.user;

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth",
      },
      props: {
        error: null,
        user: null,
      },
    };
  } else if (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth",
      },
      props: {
        error,
        user: null,
      },
    };
  } else {
    return {
      props: {
        error: null,
        user,
      },
    };
  }
};

const Home: NextPage = (props: Props) => {
  const user = props.user;

  return (
    <React.Fragment>
      <Meta
        title="Home"
        description="Main home page"
        keywords="oberen, home page, profile, jobs, employers, employees"
        url="http://localhost:3000"
      />
      <h1>{user.username}</h1>
    </React.Fragment>
  );
};

export default Home;
