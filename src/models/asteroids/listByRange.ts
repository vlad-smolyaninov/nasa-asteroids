import {API_FEED, API_KEY} from "@/shared/nasaApi";
import {cachedFetch} from "@/adapters/cachedFetch";

export const listAsteroidsByRange = async (params: { startDate: string, endDate: string }) => {
    return await cachedFetch(API_FEED + "?" +
        new URLSearchParams({
            api_key: API_KEY,
            start_date: params.startDate,
            end_date: params.endDate
        }))
}
