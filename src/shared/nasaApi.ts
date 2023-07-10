export const API_KEY = process.env.API_KEY as string;

export const API_FEED = `https://api.nasa.gov/neo/rest/v1/feed`;
export const API_DETAILS = (id: number) => `https://api.nasa.gov/neo/rest/v1/neo/${id}`;