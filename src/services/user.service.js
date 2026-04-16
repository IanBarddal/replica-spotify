import { spotifyClient } from "../clients/spotifyClient.js"

export const userServices = {

    getCurrentUser: (accessToken, params = {}) => {

        return spotifyClient.get("/me", accessToken, params)
    },

    getCurrentUserFollowedArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/following", accessToken, {...params, type: "artist"})
    }
}