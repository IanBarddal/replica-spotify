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

