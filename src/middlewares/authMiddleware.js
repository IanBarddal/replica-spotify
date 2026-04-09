import { userServices } from "../services/user.service.js"
import { authServices } from "../services/auth.service.js"

export const authMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization

    const refreshToken = req.headers["x-refresh-token"]

    if (!authHeader) {

        return res.status(401).json({ error: "Token não fornecido." })
    }

    const accessToken = authHeader.split(" ")[1]

    try {

        const user = await userServices.getCurrentUser(accessToken)

        req.user = user

        req.accessToken = accessToken

        return next()

    } catch (error) {

        if (error.response?.status === 401 && refreshToken) {

            try {

                const newTokenData = await authServices.refreshAccessToken(refreshToken)

                const newAccessToken = newTokenData.access_token

                const user = await userServices.getCurrentUser(newAccessToken)

                req.user = user

                req.accessToken = newAccessToken

                res.setHeader("x-new-access-token", newAccessToken)

                return next()
            
            } catch (refreshError) {

                return res.status(401).json({ error: "Sessão expirada." })
            }
        }

        return res.status(401).json({ error: "Token inválido ou expirado." })
    }
}