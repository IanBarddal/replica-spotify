import { spotifyClient } from "../clients/spotifyClient.js"

export const historyServices = {

    getCurrentUserRecentlyPlayedTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/player/recently-played", accessToken, params)
    },

    getCurrentUserTopTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/top/tracks", accessToken, params)
    },

    getCurrentUserTopArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/top/artists", accessToken, params)
    }
}