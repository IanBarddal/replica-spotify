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

    const result = await tracksServices.tracksSearch(req.accessToken, query)

    const resultData = result.tracks.items.map(track => ({

        id: track.id,
        album: track.album.name,
        name: track.name,
        artist: track.artists[0].name,
        image: track.album.images[0].url
    }))

    res.json(resultData)
}

export const getTrackDetails = async (req, res) => {

    const { id } = req.params

    const { market } = req.query

    const params = {}

    if (!id) {

        throw new AppError ("ID da faixa é obrigatório", 400)
    }

    if (market) {

        params.market = String(market)
    }
        
    const result = await tracksServices.getTrackDetails(req.accessToken, id, params)

    res.json( {
        id: result.id,
        album: result.album.name,
        name: result.name,
        artist: result.artists[0].name,
        image: result.album.images[0].url
    })
}