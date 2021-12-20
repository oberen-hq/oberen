import { gql } from "@apollo/client";

const REGISTER_MUTATION = gql`
	mutation register($args: RegisterArgs!) {
        register(args: $args) {
            user {
                id
            }
            accessToken
        }
    }
`

export {REGISTER_MUTATION}