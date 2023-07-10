import {NextApiRequest, NextApiResponse} from 'next';
import getAsteroid from "@/services/asteroids/getAsteroid";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const asteroidId = req.query.asteroidId;

    try {
        const result = await getAsteroid(asteroidId);

        res.status(200).json(result);

    } catch (err: any) {
        res.status(400).json({message: err?.message || 'Error while requesting asteroid'});

    }
}