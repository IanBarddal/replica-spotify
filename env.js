import dotenv from "dotenv"

dotenv.config()

export const env = {

    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI
}