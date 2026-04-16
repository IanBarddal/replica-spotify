import { spotifyClient } from "../clients/spotifyClient.js"

export const devicesServices = {

    getPlayerDevices: (accessToken) => {

        return spotifyClient.get("/me/player/devices", accessToken)
    }
}