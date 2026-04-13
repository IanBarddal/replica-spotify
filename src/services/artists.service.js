import { spotifyClient } from "../clients/spotifyClient.js"


export const artistServices = {

    getArtistDetails: (accessToken, id) => {

        return spotifyClient.get(`artists/${id}`, accessToken)
    }
}