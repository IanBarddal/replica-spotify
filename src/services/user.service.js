import { spotifyClient } from "../clients/spotifyClient.js"

export const userServices = {

    getCurrentUser: (accessToken, params = {}) => {

        return spotifyClient.get("/me", accessToken, params)
    },

    getCurrentUserPlaylists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/playlists", accessToken, params)
    },

    getCurrentUserTopTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/top/tracks", accessToken, params)
    },

    getCurrentUserTopArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/top/artists", accessToken, params)
    },

    getCurrentUserRecentlyPlayedTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/player/recently-played", accessToken, params)
    },

    getCurrentUserLikedTracks: (accessToken, params = {}) => {

        return spotifyClient.get("me/tracks", accessToken, params)
    },

    getCurrentUserLikedAlbums: (accessToken, params = {}) => {

        return spotifyClient.get("/me/albums", accessToken, params)
    },

    getCurrentUserFollowedArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/following", accessToken, {...params, type: "artist"})
    },

    getCurrentUserPlaybackState: (accessToken, params = {}) => { // Mostra o estado atual do player

        return spotifyClient.get("/me/player", accessToken, params)
    },

    getCurrentUserCurrentlyPlayingTrack: (accessToken, params = {}) => { // Mostra a faixa que está tocando no momento

        return spotifyClient.get("/me/player/currently-playing", accessToken, params)
    },

    currentUserPlayerPlay: (accessToken) => {

        return spotifyClient.put("/me/player/play", accessToken)
    },

    currentUserPlayerPause: (accessToken) => {

        return spotifyClient.put("/me/player/pause", accessToken)
    },

    currentUserPlayerPreviousTrack: (accessToken) => {

        return spotifyClient.post("/me/player/previous", accessToken)
    },

    currentUserPlayerNextTrack: (accessToken) => {

        return spotifyClient.post("/me/player/next", accessToken)
    },

    currentUserSetVolume: (accessToken, volume) => {

        return spotifyClient.put(`/me/player/volume?volume_percent=${volume}`, accessToken)
    }
}