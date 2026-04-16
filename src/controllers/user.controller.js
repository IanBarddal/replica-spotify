import { userServices } from "../services/user.service.js"

export const getCurrentUser = (req, res) => {

    return res.json(req.user);
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