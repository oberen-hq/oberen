import { ME_QUERY } from "../graphql/queries"
import { useQuery } from "@apollo/client"

export default function Home() {
    const {error, loading, data} = useQuery(ME_QUERY);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    const user = data?.me;

    console.log(user);
    
    return (
        <div>
            <h1>Username: {user.username}</h1>
            <h1>Email: {user.email}</h1>
        </div>
    )
}
