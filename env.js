import dotenv from "dotenv"

dotenv.config()

export const env = {

    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    databaseFile: process.env.DATABASE_FILE,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI
}