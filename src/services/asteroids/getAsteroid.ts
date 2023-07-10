import Ajv, {JSONSchemaType} from "ajv";
import {getAsteroidById} from "@/models/asteroids";

const ajv = new Ajv({coerceTypes: true})

type AsteroidId = number

const schema: JSONSchemaType<AsteroidId> = {
    type: "integer",
}

const validate = ajv.compile(schema)

export default async function getAsteroid(asteroidId: unknown) {
    if (!validate(asteroidId)) {
        console.log(validate.errors);
        throw new Error("Validation error")
    }

    return await getAsteroidById(asteroidId);
}