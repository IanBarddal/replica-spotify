import { playlistServices } from "../services/playlists.service.js"
import { AppError } from "../utils/appError.js"

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