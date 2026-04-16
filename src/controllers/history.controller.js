import { historyServices } from "../services/history.service.js"

export const getCurrentUserRecentlyPlayedTracks = async (req, res) => {

    try {

        const { limit, after, before } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (after) {

            params.after = Number(after)
        }

        if (before) {

            params.before = Number(before)
        }

        const recentlyPlayed = await historyServices.getCurrentUserRecentlyPlayedTracks(req.accessToken, params)

        res.json(recentlyPlayed)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}