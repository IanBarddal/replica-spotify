import { Router } from "express"
import { login, handleRefreshAccessToken, handleSpotifyCallback } from "../controllers/auth.controller.js"

const router = Router()

router.get("/login", login)
router.get("/callback", handleSpotifyCallback)
router.post("/refresh_token", handleRefreshAccessToken)

export default router