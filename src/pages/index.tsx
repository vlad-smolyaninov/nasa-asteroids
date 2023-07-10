import React from 'react';
import styled from "styled-components";
import {LoaderSpinner, PageLayout} from "@/features/ui";
import {useRouter} from 'next/router';
import {useQuery} from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import {DateRangeForm} from "@/features/date-range-form";
import {AsteroidsList} from "@/features/asteroids-list";
import {Asteroid} from "@/entities/Asteroid";

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
`

const AsteroidsPage: React.FC = () => {
    const {query, isReady} = useRouter();
    const startDate = query.startDate as string || "2015-09-07"
    const endDate = query.endDate as string || "2015-09-08"

    const {
        isLoading,
        error,
        data: asteroids
    } = useQuery<Asteroid[], AxiosError<{ message?: string }>>({
        queryKey: ['asteroids', startDate, endDate],
        queryFn: async () => {
            const res = await axios.get(`/api/asteroids?startDate=${startDate}&endDate=${endDate}`)
            return [...Object.values(res.data.near_earth_objects)].flat() as Asteroid[]
        },
        retry: 0,
        enabled: isReady
    })
    const errorMessage = error ? error?.response?.data.message : 'Unknown'

    return (
        <PageWrapper>
            <PageLayout title="Asteroids">
                {<DateRangeForm startDate={startDate} endDate={endDate}/>}
                {isLoading && <LoaderSpinner/>}
                {error && "There is some error with fetching asteroids: " + errorMessage}
                {asteroids && <AsteroidsList key={`${startDate}-${endDate}`} asteroids={asteroids} favorites={[]}/>}
            </PageLayout>
        </PageWrapper>
    )
};

export default AsteroidsPage