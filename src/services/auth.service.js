import { env } from "../../env.js"
import axios from "axios"

export async function exchangeCodeForToken (code) {

    const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: env.SPOTIFY_REDIRECT_URI,
    }),
    {
        headers: {
            Authorization:
                "Basic" + Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`

                ).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
        },
    }
    )

    return response.data
}