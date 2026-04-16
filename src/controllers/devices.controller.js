import { devicesServices } from "../services/devices.service.js"

export const getPlayerDevices = async (req, res) => {

    try {

        const devices = await devicesServices.getPlayerDevices(req.accessToken)

        res.json(devices)

    } catch (error) {

        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}