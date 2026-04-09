import { Router } from "express"
import { getCurrentUser, getCurrentUserPlaylists, getCurrentUserTopTracks } from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me", getCurrentUser)
router.get("/me/playlists", getCurrentUserPlaylists)
router.get("/me/top/tracks", getCurrentUserTopTracks)

export default router