import NodeCache from "node-cache"

const cache = new NodeCache()

export const cachedFetch = async (url: string) => {
    if (cache.has(url)) {
        console.info("Get data from cache:" + url)
        return cache.get(url);
    }

    const result = await fetch(url);
    const data = await result.json()
    if (result.ok) {
        cache.set(url, data);
        return data;
    }

    throw new Error(data.error_message || "Nasa API fetch failed")
}
