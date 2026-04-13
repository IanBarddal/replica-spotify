import { spotifyClient } from "../clients/spotifyClient.js"

export const playlistServices = {

    getPlaylist: (accessToken, id, params = {}) => {

        return spotifyClient.get(`/playlists/${id}`, accessToken, params)
    },
    
    getUsersPlaylists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/playlists", accessToken, params)
    },

    createPlaylist: (accessToken, params = {}) => {

        return spotifyClient.post("/me/playlists", accessToken, params)
    },

    changePlaylistDetails: (accessToken, id, data) => {

        return spotifyClient.put(`/playlists/${id}`, accessToken, data)
    },

    addTracks: (accessToken, id, data) => {

        return spotifyClient.post(`/playlists/${id}/items`, accessToken, data)
    }
}