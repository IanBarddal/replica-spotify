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