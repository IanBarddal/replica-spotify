import { tracksServices } from "../services/tracks.service.js"
import { AppError } from "../utils/appError.js"

export const tracksSearch = async (req, res) => {

    const { q: query, limit, offset, market, includeExternal } = req.query

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

    if (includeExternal) {

        params.includeExternal = String(includeExternal)
    }

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