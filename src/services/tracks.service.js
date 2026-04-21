import { spotifyClient } from "../clients/spotifyClient.js"

export const tracksServices = {

    searchTracks: (accessToken, query, params = {}) => {

        return spotifyClient.get(`/search`, accessToken, {q: query, type: "track", ...params})
    },

    getTrackDetails: (accessToken, id, params = {}) => {

        return spotifyClient.get(`/tracks/${id}`, accessToken, params)
    },
}