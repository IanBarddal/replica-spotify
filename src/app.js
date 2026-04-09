import express from "express"
import healthRoute from "./routes/health.routes.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"

const app = express()

app.use(express.json())

app.use("/health", healthRoute)

app.use("/auth", authRoutes)

app.use("/user", userRoutes)

app.use(errorMiddleware)

export default app