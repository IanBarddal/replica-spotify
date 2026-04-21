import { favoritesServices } from "../services/favorites.service.js"

export const getCurrentUserFollowingArtists = async (req, res) => {

    try {

        const { after, limit } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (after) {

            params.after = String(after)
        }

        const followingArtists = await favoritesServices.getCurrentUserFollowingArtists(req.accessToken, params)

        res.json(followingArtists.artists.items.map(artist => ({
            id: artist.id,
            name: artist.name,
            uri: artist.uri,
            image: artist.images[0]?.url
        })))

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserFavoriteAlbums = async (req, res) => {

    try {

        const { limit, offset, market } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        if (market) {

            params.market = String(market)
        }

        const likedAlbums = await favoritesServices.getCurrentUserFavoriteAlbums(req.accessToken, params)

        res.json(likedAlbums)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}