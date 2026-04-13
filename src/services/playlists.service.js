import { spotifyClient } from "../clients/spotifyClient.js"

export const playlistServices = {
    
    getUsersPlaylists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/playlists", accessToken, params)
    },

    
}