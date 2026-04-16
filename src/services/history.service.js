import { spotifyClient } from "../clients/spotifyClient.js"

export const historyServices = {

    getCurrentUserRecentlyPlayedTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/player/recently-played", accessToken, params)
    },

    
}