import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import * as allHistoryControllers from "../controllers/history.controller.js"

const router = Router()

router.use(authMiddleware)

router.get("/recently-played", allHistoryControllers.getCurrentUserRecentlyPlayedTracks)
router.get("/top/tracks", allHistoryControllers.getCurrentUserTopTracks)
router.get("/top/artists", allHistoryControllers.getCurrentUserTopArtists)

export default router