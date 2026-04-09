import { env } from "../../env.js"
import axios from "axios"
import querystring from "querystring"
import { AppError } from "../utils/appError.js"

export const authServices = {

    exchangeCodeForToken: async (code) => {

        const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: env.redirect_uri,
        }),
        {
            headers: {
                Authorization:
                    "Basic " + Buffer.from(`${env.spotifyClientId}:${env.spotifyClientSecret}`).toString("base64"),
                    "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    )

        return response.data
    },

    buildSpotifyAuthURL: () => {

        const scope = "user-read-email user-read-private"

        const queryParams = querystring.stringify({
            response_type: "code",
            client_id: env.spotifyClientId,
            scope,
            redirect_uri: env.redirect_uri
        })

        return `https://accounts.spotify.com/authorize?${queryParams}`
    },

    refreshAccessToken: async (refreshToken) => {

        try {

            const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken
            }),
            {
                headers: {
                    Authorization: "Basic " + Buffer.from(`${env.spotifyClientId}: ${env.spotifyClientSecret}`).toString("base64"),
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }
        )

        return response.data

        } catch (error) {

            console.error("Erro ao atualizar token de acesso: ", error.response?.data || error.message)

            throw new AppError("Falha ao atualizar token de acesso", 401)
        }
    }
}