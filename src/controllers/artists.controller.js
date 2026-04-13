import { artistServices } from "../services/artists.service.js"
import { AppError } from "../utils/appError.js"

export const getArtistDetails = async (req, res) => {

    const { id } = req.params

    if (!id) {

        throw new AppError ("ID do artista é obrigatório", 400)
    }

    try {

        const result = await artistServices.getArtistDetails(req.accessToken, id)

        res.json(result)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getArtistAlbums = async (req, res) => {

    const { id } = req.params

    const { include_groups, market, limit, offset } = req.query

    const params = {}

    if (!id) {

        throw new AppError ("ID do artista é obrigatório.", 400)
    }

    if (include_groups) {

        params.include_groups = String(include_groups)
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

        const result = await artistServices.getArtistAlbums(req.accessToken, id, params)

        res.json(result)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const searchArtists = async (req, res) => {

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
    }

    try {

        const result = await artistServices.searchArtists(req.accessToken, query, params)

        res.json(result.artists.items.map(artist => ({

            id: artist.id,
            name: artist.name,
            image: artist.images[0].url,
            uri: artist.uri
        })))

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}