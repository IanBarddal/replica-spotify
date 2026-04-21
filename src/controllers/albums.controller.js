import { albumServices } from "../services/albums.service.js"
import { AppError } from "../utils/appError.js"

export const getAlbumDetails = async (req, res) => {

    const { id } = req.params

    const { market } = req.query

    const params = {}

    if (!id) {

        throw new AppError ("ID do álbum é obrigatório", 400)
    }

    if (market) {

        params.market = String(market)
    }

    try {

        const result = await albumServices.getAlbumDetails(req.accessToken, id, params)

        res.json({
            id: result.id,
            name: result.name,
            release_date: result.release_date,
            artist: result.artists[0].name,
            tracks: result.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                track_number: track.track_number,
                duration_ms: track.duration_ms
            }))
})

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getAlbumTracks = async (req, res) => {

    const { id } = req.params

    const { market, limit, offset } = req.query

    const params = {}

    if (!id) {

        throw new AppError("ID do álbum é obrigatório", 400)
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

    try {

        const result = await albumServices.getAlbumTracks(req.accessToken, id, params)

        res.json(result.items.map(track => ({
            id: track.id,
            track_number: track.track_number,
            name: track.name,
            duration_ms: track.duration_ms
        })))

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const searchAlbums = async (req, res) => {

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

        const result = await albumServices.searchAlbums(req.accessToken, query, params)

        res.json(result)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}