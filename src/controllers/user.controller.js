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