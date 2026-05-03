import { spotifyClient } from "../clients/spotifyClient.js"

export const queueServices = {

    getQueue: (accessToken) => {

        return spotifyClient.get("/me/player/queue", accessToken)
    },

    addTrackToQueue: (accessToken, data) => {

        return spotifyClient.post(`me/player/queue?uri=${data}`, accessToken, data)
    }
}