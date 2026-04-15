import axios from "axios"
import { AppError } from "../utils/appError.js"

const api = axios.create({
    baseURL: "https://api.spotify.com/v1"
})

export const spotifyClient = {

    request: async ({ method, url, accessToken, data, params }) => {

        try {

            const response = await api({
                method,
                url,
                ...(data && { data }),
                ...(params && { params }),
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            return response.data
        
        } catch (error) {

            throw new AppError (
                error.response?.data?.error?.message || "Erro no Spotify",
                error.response?.status || 500
            )
        }
    },

    get: (url, accessToken, params = {}) => {

        return spotifyClient.request({
            method: "GET",
            url,
            accessToken,
            params
        })
    },

    post: (url, accessToken, data) => {

        return spotifyClient.request({
            method: "POST",
            url,
            accessToken,
            data
        })
    },

    put: (url, accessToken, data) => {

        return spotifyClient.request({
            method: "PUT",
            url, 
            accessToken,
            data
        })
    },

    delete: (url, accessToken, data) => {

        return spotifyClient.request({
            method: "DELETE",
            url,
            accessToken,
            data
        })
    }
}