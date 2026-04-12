import { spotifyClient } from "../clients/spotifyClient.js"

export const albumServices = {

    getAlbumDetails: (accessToken, id, params) => {

        return spotifyClient.get(`/albums/${id}`, accessToken, params)
    },

    getAlbumTracks: (accessToken, id, params) => {

        return spotifyClient.get(`albums/${id}/tracks`, accessToken, params)
    }
}