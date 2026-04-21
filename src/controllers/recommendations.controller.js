import { recommendationServices } from "../services/recommendations.service.js"

export const recommendArtists = async (req, res) => {

    try {

        const result = await recommendationServices.recommendArtists(req.accessToken)

        res.json(result)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const recommendTracks = async (req, res) => {

    const recommendations = []

    try {

        const topTracks = await recommendationServices.recommendTracks(req.accessToken)

        res.json(topTracks)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}