import React from 'react';
import styled from "styled-components";
import {LoaderSpinner, PageLayout} from "@/features/ui";
import {useRouter} from 'next/router';
import {AsteroidDetails} from "@/features/asteroid-details";
import {useQuery} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import {Asteroid} from "@/entities/Asteroid";


const PageWrapper = styled.div`
  height: 100%;
  display: flex;
`

const AsteroidsPage: React.FC = () => {
    const {query, isReady} = useRouter();
    const asteroidId = query.asteroidId as string

    const {
        isLoading,
        error,
        data: asteroid
    } = useQuery<Asteroid, AxiosError<{ message?: string }>>({
        queryKey: ['asteroid', asteroidId],
        queryFn: async () => {
            const res = await axios.get(`/api/asteroids/${asteroidId}`)
            return res.data
        },
        retry: 0,
        enabled: isReady
    })
    const errorMessage = error ? error?.response?.data.message : 'Unknown'

    return (
        <PageWrapper>
            <PageLayout title={"Asteroid #" + (isReady ? asteroidId : '')}>
                {isLoading && <LoaderSpinner/>}
                {error && "There is some error with fetching asteroid: " + errorMessage}
                {asteroid && !error && <AsteroidDetails asteroid={asteroid}/>}
            </PageLayout>
        </PageWrapper>
    )
};

export default AsteroidsPage