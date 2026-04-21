import { spotifyClient } from "../clients/spotifyClient.js"

export const favoritesServices = {

    getCurrentUserFavoriteArtists: (accessToken, params = {}) => {

        return spotifyClient.get("/me/following", accessToken, {...params, type: "artist"})
    },


}