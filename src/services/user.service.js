import { spotifyClient } from "../clients/spotifyClient.js"

export const userServices = {

    getCurrentUser: (accessToken, params = {}) => {

        return spotifyClient.get("/me", accessToken, params)
    },

    getCurrentUserPlaylists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/playlists", accessToken, params)
    },

    getCurrentUserTopTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/top/tracks", accessToken, params)
    },

    getCurrentUserTopArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/top/artists", accessToken, params)
    }
}