import {NextApiRequest, NextApiResponse} from 'next';
import listAsteroids from "@/services/asteroids/listAsteroids";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    try {
        const result = await listAsteroids({startDate, endDate});
        res.status(200).json(result);

    } catch (err: any) {
        console.log({...err.errors});
        res.status(400).json({message: err?.message || 'Error while requesting Asteroids'});
    }
}