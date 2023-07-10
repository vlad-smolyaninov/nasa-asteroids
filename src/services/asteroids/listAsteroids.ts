import Ajv, {JSONSchemaType} from "ajv";
import addFormats from "ajv-formats"
import {listAsteroidsByRange} from "@/models/asteroids";

const ajv = new Ajv()
addFormats(ajv)

interface IListAsteroidsBody {
    startDate: string,
    endDate: string,
}

const schema: JSONSchemaType<IListAsteroidsBody> = {
    type: "object",
    "properties": {
        "startDate": {
            "type": "string",
            "format": "date"
        },
        "endDate": {
            "type": "string",
            "format": "date"
        }
    },
    required:["startDate", "endDate"],
    additionalProperties: false
}

const validate = ajv.compile(schema)

export default async function listAsteroids(body: unknown) {
    if(!validate(body)){
        throw new Error("Validation error")
    }

    return await listAsteroidsByRange(body as IListAsteroidsBody);
}