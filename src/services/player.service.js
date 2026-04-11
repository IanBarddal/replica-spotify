import { spotifyClient } from "../clients/spotifyClient.js"

export const playerServices = {

    getCurrentlyPlayingTrack: (accessToken, params = {}) => { // Mostra a faixa sendo tocada no momento

        return spotifyClient.get("/me/player/currently-playing", accessToken, params)
    },

    getCurrentUserRecentlyPlayedTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/player/recently-played", accessToken, params)
    },

    getPlayerPlaybackState: (accessToken, params = {}) => { // Mostra o estado atual do player

        return spotifyClient.get("/me/player", accessToken, params)
    },

    getPlayerDevices: (accessToken) => {

        return spotifyClient.get("/me/player/devices", accessToken)
    },

    playerPlay: (accessToken) => {

        return spotifyClient.put("/me/player/play", accessToken)
    },

    playerPause: (accessToken) => {

        return spotifyClient.put("/me/player/pause", accessToken)
    },

    playerPreviousTrack: (accessToken) => {

        return spotifyClient.post("/me/player/previous", accessToken)
    },

    playerNextTrack: (accessToken) => {

        return spotifyClient.post("/me/player/next", accessToken)
    },

    playerSetVolume: (accessToken, volume) => {

        return spotifyClient.put(`/me/player/volume?volume_percent=${volume}`, accessToken)
    },

    playerShuffle: (accessToken, state) => {

        return spotifyClient.put(`/me/player/shuffle?state=${state}`, accessToken)
    },

    playerRepeatMode: (accessToken, state) => {

        return spotifyClient.put(`/me/player/repeat?state=${state}`, accessToken)
    }
}