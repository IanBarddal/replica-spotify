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

        const { limit, offset, timeRange } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        if (timeRange) {

            params.timeRange = String(timeRange)
        }

        const tracks = await userServices.getCurrentUserTopTracks(req.accessToken, params)

        res.json(tracks)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserTopArtists = async (req, res) => {

    try {

        const { limit, offset, timeRange } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        if (timeRange) {

            params.timeRange = String(timeRange)
        }

        const artists = await userServices.getCurrentUserTopArtists(req.accessToken, params)

        res.json(artists)
    
    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserFollowedArtists = async (req, res) => {

    try {

        const { after, limit } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (after) {

            params.after = String(after)
        }

        const followedArtists = await userServices.getCurrentUserFollowedArtists(req.accessToken, params)

        res.json(followedArtists)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}