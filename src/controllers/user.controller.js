import { userServices } from "../services/user.service.js"

export const getCurrentUser = (req, res) => {

    return res.json(req.user);
}

export const getCurrentUserPlaylists = async (req, res) => {

    try {

        const playlists = await userServices.getCurrentUserPlaylists(req.accessToken)

        res.json(playlists)

    } catch (error) {

        res.status(error.statusCode || 500).json({ error: error.message })
    }
    
}