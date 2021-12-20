import { gql } from "@apollo/client";

const ME_QUERY = gql`
    query {
        me {
            id
            createdAt
            updatedAt
            displayName
            username
            email
            isLocal
            role
            count
            profileId
        }
    }
`

export {ME_QUERY}