import { Router } from "express"
import * as allTracksControllers from "../controllers/tracks.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/search", allTracksControllers.tracksSearch)
router.get("/:id", allTracksControllers.getTrackDetails)

export default router