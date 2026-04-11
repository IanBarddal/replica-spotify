import { spotifyClient } from "../clients/spotifyClient.js"

export const tracksServices = {

    tracksSearch: (accessToken, query) => {

        return spotifyClient.get(`/search?q=${query}&type=track`, accessToken)
    }
}