import React from 'react';
import {Asteroid} from "@/entities/Asteroid";
import {useRouter} from "next/router";
import {routes} from "@/shared/routes";

interface AsteroidRowProps {
    asteroid: Asteroid,
    favorites: number[],
}

export const AsteroidRow: React.FC<AsteroidRowProps> = ({asteroid, favorites}) => {
    const router = useRouter();

    return <tr onClick={() => router.push(routes.ASTEROIDS + asteroid.id)}>
        <td><b>{asteroid.name}</b></td>
        <td>{asteroid.close_approach_data[0].close_approach_date}</td>
        <td>{asteroid.absolute_magnitude_h}</td>
    </tr>
}