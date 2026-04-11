import { userServices } from "../services/user.service.js"
import { AppError } from "../utils/appError.js";

export const getCurrentUser = (req, res) => {

    return res.json(req.user);
}

export const getCurrentUserPlaylists = async (req, res) => {

    try {

        const { limit, offset } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        const playlists = await userServices.getCurrentUserPlaylists(req.accessToken, params)

        res.json(playlists)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserTopTracks = async (req, res) => {

    try {

        const { limit, offset, timeRange } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        if (timeRange) {

            params.timeRange = String(timeRange)
        }

        const tracks = await userServices.getCurrentUserTopTracks(req.accessToken, params)

        res.json(tracks)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserTopArtists = async (req, res) => {

    try {

        const { limit, offset, timeRange } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (offset) {

            params.offset = Number(offset)
        }

        if (timeRange) {

            params.timeRange = String(timeRange)
        }

        const artists = await userServices.getCurrentUserTopArtists(req.accessToken, params)

        res.json(artists)
    
    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
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

        const recentlyPlayed = await userServices.getCurrentUserRecentlyPlayedTracks(req.accessToken, params)

        res.json(recentlyPlayed)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserLikedTracks = async (req, res) => {

    try {

        const { market, limit, offset } = req.query

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

        const likedTracks = await userServices.getCurrentUserLikedTracks(req.accessToken, params)

        res.json(likedTracks)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserLikedAlbums = async (req, res) => {

    try {

        const { limit, offset, market } = req.query

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

        const likedAlbums = await userServices.getCurrentUserLikedAlbums(req.accessToken, params)

        res.json(likedAlbums)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserFollowedArtists = async (req, res) => {

    try {

        const { after, limit } = req.query

        const params = {}

        if (limit) {

            params.limit = Number(limit)
        }

        if (after) {

            params.after = String(after)
        }

        const followedArtists = await userServices.getCurrentUserFollowedArtists(req.accessToken, params)

        res.json(followedArtists)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserPlaybackState = async (req, res) => {

    try {

        const { market, additionalTypes } = req.query

        const params = {}

        if (market) {

            params.market = String(market)
        }

        if (additionalTypes) {

            params.additionalTypes = String(market)
        }

        const playbackState = await userServices.getCurrentUserPlaybackState(req.accessToken, params)

        res.json(playbackState)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const getCurrentUserCurrentlyPlayingTrack = async (req, res) => {

    try {

        const { market, additionalTypes } = req.query

        const params = {}

        if (market) {

            params.market = String(market)
        }

        if (additionalTypes) {

            params.additionalTypes = String(additionalTypes)
        }

        const currentTrack = await userServices.getCurrentUserCurrentlyPlayingTrack(req.accessToken, params)

        res.json(currentTrack)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

export const currentUserPlayerPlay = async (req, res) => {

    await userServices.currentUserPlayerPlay(req.accessToken)

    res.status(204).send()
}

export const currentUserPlayerPause = async (req, res) => {

    await userServices.currentUserPlayerPause(req.accessToken)

    res.status(204).send()
}

export const currentUserPlayerPreviousTrack = async (req, res) => {

    await userServices.currentUserPlayerPreviousTrack(req.accessToken)

    res.status(204).send()
}

export const currentUserPlayerNextTrack = async (req, res) => {

    await userServices.currentUserPlayerNextTrack(req.accessToken)

    res.status(204).send()
}

export const currentUserSetVolume = async (req, res) => {

    const { volume_percent } = req.query

    const volume = Number(volume_percent)

    if (isNaN(volume)) {
        throw new AppError("volume deve ser um número", 400)
    }

    if (volume < 0 || volume > 100) {
        throw new AppError("volume deve estar entre 0 e 100", 400)
    }

    try {

        await userServices.currentUserSetVolume(req.accessToken, volume)

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