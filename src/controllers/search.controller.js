import { genericSearchService } from "../services/search.service.js"
import { AppError } from "../utils/appError.js"

export const genericSearch = async (req, res) => {

    const { q: query, market, limit, offset, include_external } = req.query

    const params = {}

    if (!query) {

        throw new AppError ("Digite algo para buscar", 400)
    }

    if (market) {

        params.market = String(market)
    }

    if (limit) {

        params.limit = Number(limit)
    }

    if (offset) {

        params.offset = Number(offset)
    }

    if (include_external) {

        params.include_external = String(include_external)

        if (include_external !== "audio") {

            throw new AppError ("O valor de 'include_external' deve ser 'audio'.", 400)
        }
    }

    try {

        const result = await genericSearchService(req.accessToken, query, params)

        res.json(result)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}