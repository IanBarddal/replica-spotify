import { queueServices } from "../services/queue.service.js"
import { AppError } from "../utils/appError.js"

export const getQueue = async (req, res) => {

    try {

        const queue = await queueServices.getQueue(req.accessToken)

        return res.json(res.json(queue.queue.map(items => ({
            artist: items.artists[0].name,
            album: items.album.name,
            track: items.name
        }))))

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const addTrackToQueue = async (req, res) => {

    const { uri } = req.query

    if (!uri) {

        throw new AppError ("URI é obrigatória", 400)
    }

    const { device_id } = req.body || {}

    const data = uri

    try {

        await queueServices.addTrackToQueue(req.accessToken, data)

        return res.status(201).json({ message: "Faixa adicionada com sucesso à fila" })

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}