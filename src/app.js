import express from "express"
import healthRoute from "./routes/health.routes.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import searchRoutes from "./routes/search.routes.js"
import playerRoutes from './routes/player.routes.js'
import trackRoutes from "./routes/tracks.routes.js"
import albumRoutes from "./routes/albums.routes.js"
import artistRoutes from "./routes/artists.routes.js"
import playlistsRoutes from "./routes/playlists.routes.js"
import historyRoutes from "./routes/history.routes.js"
import devicesRoutes from "./routes/devices.routes.js"
import recommendationsRoutes from "./routes/recommendations.routes.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"

const app = express()

app.use(express.json())

app.use("/health", healthRoute)

app.use("/auth", authRoutes)

app.use("/user", userRoutes)

app.use("/search", searchRoutes)

app.use("/player", playerRoutes)

app.use("/tracks", trackRoutes)

app.use("/albums", albumRoutes)

app.use("/artists", artistRoutes)

app.use("/playlists", playlistsRoutes)

app.use("/history", historyRoutes)

app.use("/devices", devicesRoutes)

app.use("/recommendations", recommendationsRoutes)

app.use(errorMiddleware)

export default app