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
            tracks: result.tracks.items.map(track => track.name)
        })

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

