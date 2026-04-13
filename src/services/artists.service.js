import { spotifyClient } from "../clients/spotifyClient.js"


export const artistServices = {

    getArtistDetails: (accessToken, id) => {

        return spotifyClient.get(`artists/${id}`, accessToken)
    },

    getArtistAlbums: (accessToken, id, params = {}) => {

        return spotifyClient.get(`artists/${id}/albums`, accessToken, params)
    },

    searchArtists: (accessToken, query, params = {}) => {

        return spotifyClient.get("/search", accessToken, { q: query, type: "artist", ...params })
    }
}