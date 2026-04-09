import { userServices } from "../services/user.service.js"

export const authenticateUser = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader) {

        return res.status(401).json({ error: "Token não fornecido." })
    }

    const token = authHeader.split(" ")[1]

    try {

        const user = await userServices.getCurrentUser(token)

        req.user = user

        next()

    } catch (error) {

        return res.status(401).json({ error: "Token inválido ou expirado." })
    }
}