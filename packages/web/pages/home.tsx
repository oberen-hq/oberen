import type { NextPage } from "next";
import { NextRequest } from "next/server";
import { useAuthContext } from "../context/user";

export const getServerSideProps = async (context: { req: NextRequest }) => {
  const { user, error } = useAuthContext();

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth",
      },
      props: {},
    };
  }

  if (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth",
      },
      props: {
        error,
      },
    };
  }
};

const Home: NextPage = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Home NextPage</h1>
    </div>
  );
};

export default Home;
