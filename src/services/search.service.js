import { spotifyClient } from "../clients/spotifyClient.js"

export const genericSearchService = (accessToken, query, params = {}) => {

    return spotifyClient.get("/search", accessToken, {q: query, type: "track,artist,album,playlist", ...params})
}