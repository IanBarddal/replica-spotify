import { AppError } from "../utils/appError.js"
import axios from "axios"

export const userServices = {

    getCurrentUser: async (accessToken) => {

        try {

            const response = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })

            return response.data

        } catch (error) {

            console.error("Erro ao buscar usuário: ", error.response?.data || error.message)

            throw new AppError ("Não foi possível retornar dados do usuário.", 401)
        }
    }
}