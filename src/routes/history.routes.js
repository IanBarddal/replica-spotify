import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import * as allHistoryControllers from "../controllers/history.controller.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/player/recently-played", allHistoryControllers.getCurrentUserRecentlyPlayedTracks)

export default router