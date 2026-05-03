import { spotifyClient } from "../clients/spotifyClient.js"

export const queueServices = {

    getQueue: (accessToken) => {

        return spotifyClient.get("/me/player/queue", accessToken)
    },

    addTrackToQueue: (accessToken, id, params = {}) => {

        return spotifyClient.post("me/player/queue", accessToken, params)
    }
}