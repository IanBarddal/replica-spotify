import { favoritesServices } from "../services/favorites.service.js"

export const getCurrentUserFavoriteArtists = async (req, res) => {

    try {

        const { after, limit } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (after) {

            params.after = String(after)
        }

        const favoriteArtists = await favoritesServices.getCurrentUserFavoriteArtists(req.accessToken, params)

        res.json(favoriteArtists.artists.items.map(artist => ({
            id: artist.id,
            name: artist.name,
            uri: artist.uri,
            image: artist.images[0]?.url
        })))

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

