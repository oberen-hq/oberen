import { ME_QUERY, FIND_USERS_IN_MASS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const meQuery = useQuery(ME_QUERY);

  if (meQuery.loading) return <p>Loading...</p>;
  if (meQuery.error) return <p>{meQuery.error.message}</p>;

  const user = meQuery.data?.me;
  const sessions = user.sessions;
  const followers = user.followers;
  const following = user.following;

  return (
    <div>
      <h1>User Data</h1>
      <ul>
        <li>Id: {user.id}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Role: {user.role}</li>
      </ul>
      <br />

      <h1>Sessions</h1>
      {sessions.map((session: any, index: number) => {
        console.log(session);
        return (
          <ul key={index}>
            <li>Id: {session.id}</li>
            <li>Device: {session.device}</li>
            <li>Provider: {session.provider}</li>
            <li>User Agent: {session.userAgent}</li>
            <li>Ip: {session.ip}</li>
          </ul>
        );
      })}
      <br />

      <h1>Followers</h1>
      <p>{followers.length}</p>
      <br />

      <h1>Following</h1>
      <p>{following.length}</p>
    </div>
  );
}
