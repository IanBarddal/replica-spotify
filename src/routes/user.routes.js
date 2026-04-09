import { Router } from "express"
import { getCurrentUser, getCurrentUserPlaylists } from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me", getCurrentUser)
router.get("/me/playlists", getCurrentUserPlaylists)

export default router