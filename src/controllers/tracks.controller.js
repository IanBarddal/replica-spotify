import { tracksServices } from "../services/tracks.service.js"
import { AppError } from "../utils/appError.js"

export const tracksSearch = async (req, res) => {

    const { q: query } = req.query

    if (!query) {

        throw new AppError ("Digite algo para buscar", 400)
    }

    try {

        const result = await tracksServices.tracksSearch(req.accessToken, query)

        res.json(result)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}