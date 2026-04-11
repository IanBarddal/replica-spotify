import { spotifyClient } from "../clients/spotifyClient.js"

export const tracksServices = {

    tracksSearch: (accessToken, query, params = {}) => {

        return spotifyClient.get(`/search?q=${query}&type=track`, accessToken, params)
    },

    getTrackDetails: (accessToken, id, params = {}) => {

        return spotifyClient.get(`/tracks/${id}`, accessToken, params)
    }
}