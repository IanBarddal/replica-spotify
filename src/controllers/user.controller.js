import { userServices } from "../services/user.service.js"

export const getCurrentUser = (req, res) => {

    return res.json(req.user);
}

export const getCurrentUserPlaylists = async (req, res) => {

    try {

        const { limit, offset } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        const playlists = await userServices.getCurrentUserPlaylists(req.accessToken, params)

        res.json(playlists)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserTopTracks = async (req, res) => {

    try {

        const { limit, offset } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        const tracks = await userServices.getCurrentUserTopTracks(req.accessToken, params)

        res.json(tracks)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserTopArtists = async (req, res) => {

    try {

        const { limit, offset } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        const artists = await userServices.getCurrentUserTopArtists(req.accessToken, params)

        res.json(artists)
    
    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserRecentlyPlayedTracks = async (req, res) => {

    try {

        const { limit, offset } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        const recentlyPlayed = await userServices.getCurrentUserRecentlyPlayedTracks(req.accessToken, params)

        res.json(recentlyPlayed)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserLikedTracks = async (req, res) => {

    try {

        const { market, limit, offset } = req.query

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

        const likedTracks = await userServices.getCurrentUserLikedTracks(req.accessToken, params)

        res.json(likedTracks)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserLikedAlbums = async (req, res) => {

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

        const likedAlbums = await userServices.getCurrentUserLikedAlbums(req.accessToken, params)

        res.json(likedAlbums)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}