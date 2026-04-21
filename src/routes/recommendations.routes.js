import { Router } from "express"
import * as allRecommendationsControllers from "../controllers/recommendations.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/artists", allRecommendationsControllers.recommendArtists)
router.get("/tracks", allRecommendationsControllers.recommendTracks)

export default router