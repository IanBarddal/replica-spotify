import { playerServices } from "../services/player.service.js"
import { AppError } from "../utils/appError.js"

export const getPlayerPlaybackState = async (req, res) => {

    try {

        const { market, additionalTypes } = req.query

        const params = {}

        if (market) {

            params.market = String(market)
        }

        if (additionalTypes) {

            params.additionalTypes = String(market)
        }

        const playbackState = await playerServices.getPlayerPlaybackState(req.accessToken, params)

        res.json(playbackState)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserRecentlyPlayedTracks = async (req, res) => {

    try {

        const { limit, after, before } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (after) {

            params.after = Number(after)
        }

        if (before) {

            params.before = Number(before)
        }

        const recentlyPlayed = await playerServices.getCurrentUserRecentlyPlayedTracks(req.accessToken, params)

        res.json(recentlyPlayed)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const playerPlay = async (req, res) => {

    await playerServices.playerPlay(req.accessToken)

    res.status(204).send()
}

export const playerPause = async (req, res) => {

    await playerServices.playerPause(req.accessToken)

    res.status(204).send()
}

export const playerPreviousTrack = async (req, res) => {

    await playerServices.playerPreviousTrack(req.accessToken)

    res.status(204).send()
}

export const playerNextTrack = async (req, res) => {

    await playerServices.playerNextTrack(req.accessToken)

    res.status(204).send()
}

export const playerSetVolume = async (req, res) => {

    const { volume_percent } = req.query

    const volume = Number(volume_percent)

    if (isNaN(volume)) {
        throw new AppError("volume deve ser um número", 400)
    }

    if (volume < 0 || volume > 100) {
        throw new AppError("volume deve estar entre 0 e 100", 400)
    }

    try {

        await playerServices.playerSetVolume(req.accessToken, volume)

        res.status(204).send()
    
    } catch (error) {

        if (error.status === 403) {

            throw new AppError ("Você não tem permissão para mexer no volume", 403)
        }

        if (error.message.includes("Cannot control device volume")) {

            throw new AppError ("Este dispositivo não permite alterar o volume", 400)
        }

        throw error
    }
}

export const playerShuffle = async (req, res) => {

    const { state } = req.query

    await playerServices.playerShuffle(req.accessToken, state)

    res.status(204).send()
}

export const playerRepeatMode = async (req, res) => {

    const { state } = req.query

    await playerServices.playerRepeatMode(req.accessToken, state)

    res.status(204).send()
}

export const getCurrentlyPlayingTrack = async (req, res) => {

    try {

        const { market, additionalTypes } = req.query

        const params = {}

        if (market) {

            params.market = String(market)
        }

        if (additionalTypes) {

            params.additionalTypes = String(additionalTypes)
        }

        const currentTrack = await playerServices.getCurrentlyPlayingTrack(req.accessToken, params)

        res.json(currentTrack)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getPlayerDevices = async (req, res) => {

    try {

        const devices = await playerServices.getPlayerDevices(req.accessToken)

        res.json(devices)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}