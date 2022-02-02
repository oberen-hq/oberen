import type { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Meta } from "../components";
import { MeDocument } from "../generated/graphql";
import { initializeApollo } from "../utils/apolloClient";

interface Props {
  children?: React.ReactNode;
  user?: any;
  error?: any;
  loading?: any;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = initializeApollo();
  let things = await client.query({
    query: MeDocument,
  });

  if (typeof window !== "undefined") {
    const props = await client.query({
      query: MeDocument,
    });

    console.log(props.data.me.errors);

    if (!props.data.me.user) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {
          error: props.data.me.error,
          loading: props.data.me.loading,
          user: props.data.me.user,
        },
      };
    } else if (props.data.me.error) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {
          error: props.data.me.error,
          loading: props.data.me.loading,
          user: props.data.me.user,
        },
      };
    } else {
      return {
        props: {
          error: props.data.me.error,
          loading: props.data.me.loading,
          user: props.data.me.user,
        },
      };
    }
  }
  return {
    props: {
      things: things,
    },
  };
};

const Home: NextPage = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser]: any = useState({});

  useEffect(() => {
    setIsLoading(true);
    const tempUser = props?.things;
    console.log(tempUser);
    setUser(tempUser);
    setIsLoading(false);
  }, []);

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
