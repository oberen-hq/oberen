import type { NextPage } from "next";
import { MeDocument } from "../generated/graphql";
import { initializeApollo } from "../utils/apolloClient";

const Index: NextPage = () => {
  return (
    <div>
      <h1>Index Page</h1>
    </div>
  );
};

export default Index;
