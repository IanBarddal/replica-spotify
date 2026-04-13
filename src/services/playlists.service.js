import { spotifyClient } from "../clients/spotifyClient.js"

export const playlistServices = {
    
    getUsersPlaylists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/playlists", accessToken, params)
    },

    createPlaylist: (accessToken, params) => {

        return spotifyClient.post("me/playlists", accessToken, params)
    }
}