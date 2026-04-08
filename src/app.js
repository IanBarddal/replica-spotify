import express from "express"
import healthRoute from "./routes/health.routes.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
import callbackRoutes from "./routes/callback.routes.js"
import authRoutes from "./routes/auth.routes.js"

const app = express()

app.use(express.json())

app.use("/health", healthRoute)

app.use("/", callbackRoutes)

app.use("/", authRoutes)

app.use(errorMiddleware)

export default app