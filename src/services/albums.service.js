import { spotifyClient } from "../clients/spotifyClient.js"

export const albumServices = {

    getAlbumDetails: (accessToken, id, params = {}) => {

        return spotifyClient.get(`/albums/${id}`, accessToken, params)
    },

    getAlbumTracks: (accessToken, id, params = {}) => {

        return spotifyClient.get(`albums/${id}/tracks`, accessToken, params)
    },

    getCurrentUserLikedAlbums: (accessToken, params = {}) => {

        return spotifyClient.get("/me/albums", accessToken, params)
    },

    searchAlbums: (accessToken, query, params = {}) => {

        return spotifyClient.get("/search", accessToken, {q: query, type: "album", ...params})
    }
}