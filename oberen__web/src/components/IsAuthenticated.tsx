import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ME_QUERY } from "../graphql/queries";
import React from 'react';

interface Props {
    children?: React.ReactNode
}

export default function IsAuthenticated({children}: Props) {
    const {loading, data} = useQuery(ME_QUERY)

    if (loading) return <p>Loading...</p>

    if (!data?.me) {
        return <Redirect to={{pathname: "/"}} />
    }

    return <>{children}</>
}
