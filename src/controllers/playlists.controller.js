import { playlistServices } from "../services/playlists.service.js"
import { AppError } from "../utils/appError.js"

export const getPlaylist = async (req, res) => {

    const { id } = req.params

    const { market, fields, additional_types } = req.query

    const params = {}

    if (!id) {

        throw new AppError ("ID da playlist é obrigatório", 400)
    }

    if (market) {

        params.market = String(market)
    }

    if (fields) {

        params.fields = String(fields)
    }

    if (additional_types) {

        params.additional_types = String(additional_types)
    }

    try {

        const result = await playlistServices.getPlaylist(req.accessToken, id, params)

        res.json(result)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getUsersPlaylists = async (req, res) => {

    try {

        const { limit, offset } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        const playlists = await playlistServices.getUsersPlaylists(req.accessToken, params)

        res.json(playlists)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const createPlaylist = async (req, res) => {

    const { name, description, public: isPublic } = req.body

    if (!name || !description || isPublic === undefined) {

        throw new AppError ("Faltam informações para criar a playlist", 400)
    }

    try {

        await playlistServices.createPlaylist(req.accessToken, {name, description, isPublic})

        res.status(201).json({ message: "Playlist criada com sucesso" })

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const changePlaylistDetails = async (req, res) => {

    const { id } = req.params

    const { name, description, public: isPublic } = req.body

    // CONTINUAR DEPOIS DE FAZER O ENDPOINT GET PLAYLIST

    if (!id) {

        throw new AppError ("ID da playlist é obrigatório.", 400)
    }

    if (name === undefined) {

        
    }

    try {

        await playlistServices.changePlaylistDetails(req.accessToken, id, data)

        res.status(204).send({ message: "Playlist atualizada com sucesso" })

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}