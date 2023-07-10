import {API_DETAILS, API_KEY} from "@/shared/nasaApi";
import {cachedFetch} from "@/adapters/cachedFetch";

export const getAsteroidById = async (id: number) => {
    return await cachedFetch(API_DETAILS(id) + "?" + new URLSearchParams({api_key: API_KEY}))
};