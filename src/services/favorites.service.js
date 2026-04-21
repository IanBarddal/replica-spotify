import { spotifyClient } from "../clients/spotifyClient.js"

export const favoritesServices = {

    getCurrentUserFollowingArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/following", accessToken, {...params, type: "artist"})
    },

    getCurrentUserFavoriteAlbums: (accessToken, params = {}) => {

        return spotifyClient.get("/me/albums", accessToken, params)
    },

    getCurrentUserFavoriteTracks: (accessToken, params = {}) => {

        return spotifyClient.get("/me/tracks", accessToken, params)
    }
}